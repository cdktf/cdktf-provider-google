# `securityposturePosture` Submodule <a name="`securityposturePosture` Submodule" id="@cdktf/provider-google.securityposturePosture"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityposturePosture <a name="SecurityposturePosture" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture google_securityposture_posture}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosture(Construct Scope, string Id, SecurityposturePostureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig">SecurityposturePostureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig">SecurityposturePostureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.putPolicySets">PutPolicySets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicySets` <a name="PutPolicySets" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.putPolicySets"></a>

```csharp
private void PutPolicySets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.putPolicySets.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.putTimeouts"></a>

```csharp
private void PutTimeouts(SecurityposturePostureTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeouts">SecurityposturePostureTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityposturePosture resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecurityposturePosture.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecurityposturePosture.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecurityposturePosture.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecurityposturePosture.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecurityposturePosture resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityposturePosture to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityposturePosture that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecurityposturePosture to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.policySets">PolicySets</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList">SecurityposturePosturePolicySetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.revisionId">RevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference">SecurityposturePostureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.policySetsInput">PolicySetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.postureIdInput">PostureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.postureId">PostureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicySets`<sup>Required</sup> <a name="PolicySets" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.policySets"></a>

```csharp
public SecurityposturePosturePolicySetsList PolicySets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList">SecurityposturePosturePolicySetsList</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.revisionId"></a>

```csharp
public string RevisionId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.timeouts"></a>

```csharp
public SecurityposturePostureTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference">SecurityposturePostureTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `PolicySetsInput`<sup>Optional</sup> <a name="PolicySetsInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.policySetsInput"></a>

```csharp
public object PolicySetsInput { get; }
```

- *Type:* object

---

##### `PostureIdInput`<sup>Optional</sup> <a name="PostureIdInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.postureIdInput"></a>

```csharp
public string PostureIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `PostureId`<sup>Required</sup> <a name="PostureId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.postureId"></a>

```csharp
public string PostureId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosture.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityposturePostureConfig <a name="SecurityposturePostureConfig" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePostureConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Parent,
    object PolicySets,
    string PostureId,
    string State,
    string Description = null,
    string Id = null,
    SecurityposturePostureTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.location">Location</a></code> | <code>string</code> | Location of the resource, eg: global. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.parent">Parent</a></code> | <code>string</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.policySets">PolicySets</a></code> | <code>object</code> | policy_sets block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.postureId">PostureId</a></code> | <code>string</code> | Id of the posture. It is an immutable field. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.state">State</a></code> | <code>string</code> | State of the posture. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.description">Description</a></code> | <code>string</code> | Description of the posture. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#id SecurityposturePosture#id}. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeouts">SecurityposturePostureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location of the resource, eg: global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#location SecurityposturePosture#location}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#parent SecurityposturePosture#parent}

---

##### `PolicySets`<sup>Required</sup> <a name="PolicySets" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.policySets"></a>

```csharp
public object PolicySets { get; set; }
```

- *Type:* object

policy_sets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#policy_sets SecurityposturePosture#policy_sets}

---

##### `PostureId`<sup>Required</sup> <a name="PostureId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.postureId"></a>

```csharp
public string PostureId { get; set; }
```

- *Type:* string

Id of the posture. It is an immutable field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#posture_id SecurityposturePosture#posture_id}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

State of the posture.

Update to state field should not be triggered along with
with other field updates. Possible values: ["DEPRECATED", "DRAFT", "ACTIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#state SecurityposturePosture#state}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the posture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#description SecurityposturePosture#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#id SecurityposturePosture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureConfig.property.timeouts"></a>

```csharp
public SecurityposturePostureTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeouts">SecurityposturePostureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#timeouts SecurityposturePosture#timeouts}

---

### SecurityposturePosturePolicySets <a name="SecurityposturePosturePolicySets" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySets {
    object Policies,
    string PolicySetId,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySets.property.policies">Policies</a></code> | <code>object</code> | policies block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySets.property.policySetId">PolicySetId</a></code> | <code>string</code> | ID of the policy set. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySets.property.description">Description</a></code> | <code>string</code> | Description of the policy set. |

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySets.property.policies"></a>

```csharp
public object Policies { get; set; }
```

- *Type:* object

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#policies SecurityposturePosture#policies}

---

##### `PolicySetId`<sup>Required</sup> <a name="PolicySetId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySets.property.policySetId"></a>

```csharp
public string PolicySetId { get; set; }
```

- *Type:* string

ID of the policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#policy_set_id SecurityposturePosture#policy_set_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySets.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#description SecurityposturePosture#description}

---

### SecurityposturePosturePolicySetsPolicies <a name="SecurityposturePosturePolicySetsPolicies" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPolicies {
    SecurityposturePosturePolicySetsPoliciesConstraint Constraint,
    string PolicyId,
    object ComplianceStandards = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPolicies.property.constraint">Constraint</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint">SecurityposturePosturePolicySetsPoliciesConstraint</a></code> | constraint block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPolicies.property.policyId">PolicyId</a></code> | <code>string</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPolicies.property.complianceStandards">ComplianceStandards</a></code> | <code>object</code> | compliance_standards block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPolicies.property.description">Description</a></code> | <code>string</code> | Description of the policy. |

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPolicies.property.constraint"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraint Constraint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint">SecurityposturePosturePolicySetsPoliciesConstraint</a>

constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#constraint SecurityposturePosture#constraint}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPolicies.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

ID of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#policy_id SecurityposturePosture#policy_id}

---

##### `ComplianceStandards`<sup>Optional</sup> <a name="ComplianceStandards" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPolicies.property.complianceStandards"></a>

```csharp
public object ComplianceStandards { get; set; }
```

- *Type:* object

compliance_standards block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#compliance_standards SecurityposturePosture#compliance_standards}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPolicies.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#description SecurityposturePosture#description}

---

### SecurityposturePosturePolicySetsPoliciesComplianceStandards <a name="SecurityposturePosturePolicySetsPoliciesComplianceStandards" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandards"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandards.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesComplianceStandards {
    string Control = null,
    string Standard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandards.property.control">Control</a></code> | <code>string</code> | Mapping of security controls for the policy. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandards.property.standard">Standard</a></code> | <code>string</code> | Mapping of compliance standards for the policy. |

---

##### `Control`<sup>Optional</sup> <a name="Control" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandards.property.control"></a>

```csharp
public string Control { get; set; }
```

- *Type:* string

Mapping of security controls for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#control SecurityposturePosture#control}

---

##### `Standard`<sup>Optional</sup> <a name="Standard" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandards.property.standard"></a>

```csharp
public string Standard { get; set; }
```

- *Type:* string

Mapping of compliance standards for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#standard SecurityposturePosture#standard}

---

### SecurityposturePosturePolicySetsPoliciesConstraint <a name="SecurityposturePosturePolicySetsPoliciesConstraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraint {
    SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint OrgPolicyConstraint = null,
    SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom OrgPolicyConstraintCustom = null,
    SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule SecurityHealthAnalyticsCustomModule = null,
    SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule SecurityHealthAnalyticsModule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint.property.orgPolicyConstraint">OrgPolicyConstraint</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a></code> | org_policy_constraint block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint.property.orgPolicyConstraintCustom">OrgPolicyConstraintCustom</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a></code> | org_policy_constraint_custom block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint.property.securityHealthAnalyticsCustomModule">SecurityHealthAnalyticsCustomModule</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a></code> | security_health_analytics_custom_module block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint.property.securityHealthAnalyticsModule">SecurityHealthAnalyticsModule</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a></code> | security_health_analytics_module block. |

---

##### `OrgPolicyConstraint`<sup>Optional</sup> <a name="OrgPolicyConstraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint.property.orgPolicyConstraint"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint OrgPolicyConstraint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a>

org_policy_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#org_policy_constraint SecurityposturePosture#org_policy_constraint}

---

##### `OrgPolicyConstraintCustom`<sup>Optional</sup> <a name="OrgPolicyConstraintCustom" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint.property.orgPolicyConstraintCustom"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom OrgPolicyConstraintCustom { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a>

org_policy_constraint_custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#org_policy_constraint_custom SecurityposturePosture#org_policy_constraint_custom}

---

##### `SecurityHealthAnalyticsCustomModule`<sup>Optional</sup> <a name="SecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint.property.securityHealthAnalyticsCustomModule"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule SecurityHealthAnalyticsCustomModule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a>

security_health_analytics_custom_module block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#security_health_analytics_custom_module SecurityposturePosture#security_health_analytics_custom_module}

---

##### `SecurityHealthAnalyticsModule`<sup>Optional</sup> <a name="SecurityHealthAnalyticsModule" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint.property.securityHealthAnalyticsModule"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule SecurityHealthAnalyticsModule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a>

security_health_analytics_module block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#security_health_analytics_module SecurityposturePosture#security_health_analytics_module}

---

### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint {
    string CannedConstraintId,
    object PolicyRules
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint.property.cannedConstraintId">CannedConstraintId</a></code> | <code>string</code> | Organization policy canned constraint Id. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint.property.policyRules">PolicyRules</a></code> | <code>object</code> | policy_rules block. |

---

##### `CannedConstraintId`<sup>Required</sup> <a name="CannedConstraintId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint.property.cannedConstraintId"></a>

```csharp
public string CannedConstraintId { get; set; }
```

- *Type:* string

Organization policy canned constraint Id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#canned_constraint_id SecurityposturePosture#canned_constraint_id}

---

##### `PolicyRules`<sup>Required</sup> <a name="PolicyRules" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint.property.policyRules"></a>

```csharp
public object PolicyRules { get; set; }
```

- *Type:* object

policy_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#policy_rules SecurityposturePosture#policy_rules}

---

### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom {
    object PolicyRules,
    SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint CustomConstraint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom.property.policyRules">PolicyRules</a></code> | <code>object</code> | policy_rules block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom.property.customConstraint">CustomConstraint</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a></code> | custom_constraint block. |

---

##### `PolicyRules`<sup>Required</sup> <a name="PolicyRules" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom.property.policyRules"></a>

```csharp
public object PolicyRules { get; set; }
```

- *Type:* object

policy_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#policy_rules SecurityposturePosture#policy_rules}

---

##### `CustomConstraint`<sup>Optional</sup> <a name="CustomConstraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom.property.customConstraint"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint CustomConstraint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a>

custom_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#custom_constraint SecurityposturePosture#custom_constraint}

---

### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint {
    string ActionType,
    string Condition,
    string[] MethodTypes,
    string Name,
    string[] ResourceTypes,
    string Description = null,
    string DisplayName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.actionType">ActionType</a></code> | <code>string</code> | The action to take if the condition is met. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.condition">Condition</a></code> | <code>string</code> | A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language). |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.methodTypes">MethodTypes</a></code> | <code>string[]</code> | A list of RESTful methods for which to enforce the constraint. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.name">Name</a></code> | <code>string</code> | Immutable. The name of the custom constraint. This is unique within the organization. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.description">Description</a></code> | <code>string</code> | A human-friendly description of the constraint to display as an error message when the policy is violated. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.displayName">DisplayName</a></code> | <code>string</code> | A human-friendly name for the constraint. |

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.actionType"></a>

```csharp
public string ActionType { get; set; }
```

- *Type:* string

The action to take if the condition is met. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#action_type SecurityposturePosture#action_type}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#condition SecurityposturePosture#condition}

---

##### `MethodTypes`<sup>Required</sup> <a name="MethodTypes" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.methodTypes"></a>

```csharp
public string[] MethodTypes { get; set; }
```

- *Type:* string[]

A list of RESTful methods for which to enforce the constraint.

Can be 'CREATE', 'UPDATE', or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#method_types SecurityposturePosture#method_types}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Immutable. The name of the custom constraint. This is unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#name SecurityposturePosture#name}

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

Immutable.

The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, 'container.googleapis.com/NodePool'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#resource_types SecurityposturePosture#resource_types}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-friendly description of the constraint to display as an error message when the policy is violated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#description SecurityposturePosture#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A human-friendly name for the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#display_name SecurityposturePosture#display_name}

---

### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules {
    object AllowAll = null,
    SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition Condition = null,
    object DenyAll = null,
    object Enforce = null,
    SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.allowAll">AllowAll</a></code> | <code>object</code> | Setting this to true means that all values are allowed. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.denyAll">DenyAll</a></code> | <code>object</code> | Setting this to true means that all values are denied. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.enforce">Enforce</a></code> | <code>object</code> | If 'true', then the policy is enforced. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.values">Values</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a></code> | values block. |

---

##### `AllowAll`<sup>Optional</sup> <a name="AllowAll" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.allowAll"></a>

```csharp
public object AllowAll { get; set; }
```

- *Type:* object

Setting this to true means that all values are allowed.

This field can be set only in policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#allow_all SecurityposturePosture#allow_all}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.condition"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#condition SecurityposturePosture#condition}

---

##### `DenyAll`<sup>Optional</sup> <a name="DenyAll" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.denyAll"></a>

```csharp
public object DenyAll { get; set; }
```

- *Type:* object

Setting this to true means that all values are denied.

This field can be set only in policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#deny_all SecurityposturePosture#deny_all}

---

##### `Enforce`<sup>Optional</sup> <a name="Enforce" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.enforce"></a>

```csharp
public object Enforce { get; set; }
```

- *Type:* object

If 'true', then the policy is enforced.

If 'false', then any configuration is acceptable.
This field can be set only in policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#enforce SecurityposturePosture#enforce}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRules.property.values"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues Values { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#values SecurityposturePosture#values}

---

### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#expression SecurityposturePosture#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#description SecurityposturePosture#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#location SecurityposturePosture#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#title SecurityposturePosture#title}

---

### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues {
    string[] AllowedValues = null,
    string[] DeniedValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues.property.deniedValues">DeniedValues</a></code> | <code>string[]</code> | List of values denied at this resource. |

---

##### `AllowedValues`<sup>Optional</sup> <a name="AllowedValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; set; }
```

- *Type:* string[]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#allowed_values SecurityposturePosture#allowed_values}

---

##### `DeniedValues`<sup>Optional</sup> <a name="DeniedValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues.property.deniedValues"></a>

```csharp
public string[] DeniedValues { get; set; }
```

- *Type:* string[]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#denied_values SecurityposturePosture#denied_values}

---

### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules {
    object AllowAll = null,
    SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition Condition = null,
    object DenyAll = null,
    object Enforce = null,
    SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.allowAll">AllowAll</a></code> | <code>object</code> | Setting this to true means that all values are allowed. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.denyAll">DenyAll</a></code> | <code>object</code> | Setting this to true means that all values are denied. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.enforce">Enforce</a></code> | <code>object</code> | If 'true', then the policy is enforced. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.values">Values</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a></code> | values block. |

---

##### `AllowAll`<sup>Optional</sup> <a name="AllowAll" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.allowAll"></a>

```csharp
public object AllowAll { get; set; }
```

- *Type:* object

Setting this to true means that all values are allowed.

This field can be set only in policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#allow_all SecurityposturePosture#allow_all}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.condition"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#condition SecurityposturePosture#condition}

---

##### `DenyAll`<sup>Optional</sup> <a name="DenyAll" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.denyAll"></a>

```csharp
public object DenyAll { get; set; }
```

- *Type:* object

Setting this to true means that all values are denied.

This field can be set only in policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#deny_all SecurityposturePosture#deny_all}

---

##### `Enforce`<sup>Optional</sup> <a name="Enforce" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.enforce"></a>

```csharp
public object Enforce { get; set; }
```

- *Type:* object

If 'true', then the policy is enforced.

If 'false', then any configuration is acceptable.
This field can be set only in policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#enforce SecurityposturePosture#enforce}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRules.property.values"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues Values { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#values SecurityposturePosture#values}

---

### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#expression SecurityposturePosture#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#description SecurityposturePosture#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#location SecurityposturePosture#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#title SecurityposturePosture#title}

---

### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues {
    string[] AllowedValues = null,
    string[] DeniedValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues.property.deniedValues">DeniedValues</a></code> | <code>string[]</code> | List of values denied at this resource. |

---

##### `AllowedValues`<sup>Optional</sup> <a name="AllowedValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; set; }
```

- *Type:* string[]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#allowed_values SecurityposturePosture#allowed_values}

---

##### `DeniedValues`<sup>Optional</sup> <a name="DeniedValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues.property.deniedValues"></a>

```csharp
public string[] DeniedValues { get; set; }
```

- *Type:* string[]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#denied_values SecurityposturePosture#denied_values}

---

### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule {
    SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig Config,
    string DisplayName = null,
    string ModuleEnablementState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.property.moduleEnablementState">ModuleEnablementState</a></code> | <code>string</code> | The state of enablement for the module at its level of the resource hierarchy. Possible values: ["ENABLEMENT_STATE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.property.config"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#config SecurityposturePosture#config}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#display_name SecurityposturePosture#display_name}

---

##### `ModuleEnablementState`<sup>Optional</sup> <a name="ModuleEnablementState" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule.property.moduleEnablementState"></a>

```csharp
public string ModuleEnablementState { get; set; }
```

- *Type:* string

The state of enablement for the module at its level of the resource hierarchy. Possible values: ["ENABLEMENT_STATE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#module_enablement_state SecurityposturePosture#module_enablement_state}

---

### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig {
    SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate Predicate,
    SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector ResourceSelector,
    string Severity,
    SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput CustomOutput = null,
    string Description = null,
    string Recommendation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.severity">Severity</a></code> | <code>string</code> | The severity to assign to findings generated by the module. Possible values: ["SEVERITY_UNSPECIFIED", "CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.description">Description</a></code> | <code>string</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.recommendation">Recommendation</a></code> | <code>string</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.predicate"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate Predicate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#predicate SecurityposturePosture#predicate}

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.resourceSelector"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector ResourceSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#resource_selector SecurityposturePosture#resource_selector}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

The severity to assign to findings generated by the module. Possible values: ["SEVERITY_UNSPECIFIED", "CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#severity SecurityposturePosture#severity}

---

##### `CustomOutput`<sup>Optional</sup> <a name="CustomOutput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.customOutput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput CustomOutput { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#custom_output SecurityposturePosture#custom_output}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Text that describes the vulnerability or misconfiguration that the custom module detects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#description SecurityposturePosture#description}

---

##### `Recommendation`<sup>Optional</sup> <a name="Recommendation" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig.property.recommendation"></a>

```csharp
public string Recommendation { get; set; }
```

- *Type:* string

An explanation of the recommended steps that security teams can take to resolve the detected issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#recommendation SecurityposturePosture#recommendation}

---

### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput {
    object Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput.property.properties">Properties</a></code> | <code>object</code> | properties block. |

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput.property.properties"></a>

```csharp
public object Properties { get; set; }
```

- *Type:* object

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#properties SecurityposturePosture#properties}

---

### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties {
    string Name,
    SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression ValueExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties.property.name">Name</a></code> | <code>string</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#name SecurityposturePosture#name}

---

##### `ValueExpression`<sup>Optional</sup> <a name="ValueExpression" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperties.property.valueExpression"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression ValueExpression { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#value_expression SecurityposturePosture#value_expression}

---

### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#expression SecurityposturePosture#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#description SecurityposturePosture#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#location SecurityposturePosture#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#title SecurityposturePosture#title}

---

### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#expression SecurityposturePosture#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#description SecurityposturePosture#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#location SecurityposturePosture#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#title SecurityposturePosture#title}

---

### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector {
    string[] ResourceTypes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | The resource types to run the detector on. |

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#resource_types SecurityposturePosture#resource_types}

---

### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule {
    string ModuleName,
    string ModuleEnablementState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule.property.moduleName">ModuleName</a></code> | <code>string</code> | The name of the module eg: BIGQUERY_TABLE_CMEK_DISABLED. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule.property.moduleEnablementState">ModuleEnablementState</a></code> | <code>string</code> | The state of enablement for the module at its level of the resource hierarchy. Possible values: ["ENABLEMENT_STATE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule.property.moduleName"></a>

```csharp
public string ModuleName { get; set; }
```

- *Type:* string

The name of the module eg: BIGQUERY_TABLE_CMEK_DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#module_name SecurityposturePosture#module_name}

---

##### `ModuleEnablementState`<sup>Optional</sup> <a name="ModuleEnablementState" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule.property.moduleEnablementState"></a>

```csharp
public string ModuleEnablementState { get; set; }
```

- *Type:* string

The state of enablement for the module at its level of the resource hierarchy. Possible values: ["ENABLEMENT_STATE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#module_enablement_state SecurityposturePosture#module_enablement_state}

---

### SecurityposturePostureTimeouts <a name="SecurityposturePostureTimeouts" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePostureTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#create SecurityposturePosture#create}. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#delete SecurityposturePosture#delete}. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#update SecurityposturePosture#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#create SecurityposturePosture#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#delete SecurityposturePosture#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/securityposture_posture#update SecurityposturePosture#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityposturePosturePolicySetsList <a name="SecurityposturePosturePolicySetsList" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.get"></a>

```csharp
private SecurityposturePosturePolicySetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityposturePosturePolicySetsOutputReference <a name="SecurityposturePosturePolicySetsOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.putPolicies">PutPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicies` <a name="PutPolicies" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.putPolicies"></a>

```csharp
private void PutPolicies(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.putPolicies.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList">SecurityposturePosturePolicySetsPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.policiesInput">PoliciesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.policySetIdInput">PolicySetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.policySetId">PolicySetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.policies"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesList Policies { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList">SecurityposturePosturePolicySetsPoliciesList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.policiesInput"></a>

```csharp
public object PoliciesInput { get; }
```

- *Type:* object

---

##### `PolicySetIdInput`<sup>Optional</sup> <a name="PolicySetIdInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.policySetIdInput"></a>

```csharp
public string PolicySetIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PolicySetId`<sup>Required</sup> <a name="PolicySetId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.policySetId"></a>

```csharp
public string PolicySetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityposturePosturePolicySetsPoliciesComplianceStandardsList <a name="SecurityposturePosturePolicySetsPoliciesComplianceStandardsList" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesComplianceStandardsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.get"></a>

```csharp
private SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference <a name="SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resetControl">ResetControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resetStandard">ResetStandard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetControl` <a name="ResetControl" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resetControl"></a>

```csharp
private void ResetControl()
```

##### `ResetStandard` <a name="ResetStandard" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.resetStandard"></a>

```csharp
private void ResetStandard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.controlInput">ControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.standardInput">StandardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.control">Control</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.standard">Standard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlInput`<sup>Optional</sup> <a name="ControlInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.controlInput"></a>

```csharp
public string ControlInput { get; }
```

- *Type:* string

---

##### `StandardInput`<sup>Optional</sup> <a name="StandardInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.standardInput"></a>

```csharp
public string StandardInput { get; }
```

- *Type:* string

---

##### `Control`<sup>Required</sup> <a name="Control" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.control"></a>

```csharp
public string Control { get; }
```

- *Type:* string

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.standard"></a>

```csharp
public string Standard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.actionTypeInput">ActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.methodTypesInput">MethodTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.methodTypes">MethodTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.actionTypeInput"></a>

```csharp
public string ActionTypeInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `MethodTypesInput`<sup>Optional</sup> <a name="MethodTypesInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.methodTypesInput"></a>

```csharp
public string[] MethodTypesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `MethodTypes`<sup>Required</sup> <a name="MethodTypes" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.methodTypes"></a>

```csharp
public string[] MethodTypes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.putCustomConstraint">PutCustomConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.putPolicyRules">PutPolicyRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.resetCustomConstraint">ResetCustomConstraint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomConstraint` <a name="PutCustomConstraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.putCustomConstraint"></a>

```csharp
private void PutCustomConstraint(SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.putCustomConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a>

---

##### `PutPolicyRules` <a name="PutPolicyRules" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.putPolicyRules"></a>

```csharp
private void PutPolicyRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.putPolicyRules.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomConstraint` <a name="ResetCustomConstraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.resetCustomConstraint"></a>

```csharp
private void ResetCustomConstraint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.customConstraint">CustomConstraint</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.policyRules">PolicyRules</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.customConstraintInput">CustomConstraintInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.policyRulesInput">PolicyRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomConstraint`<sup>Required</sup> <a name="CustomConstraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.customConstraint"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference CustomConstraint { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraintOutputReference</a>

---

##### `PolicyRules`<sup>Required</sup> <a name="PolicyRules" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.policyRules"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList PolicyRules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList</a>

---

##### `CustomConstraintInput`<sup>Optional</sup> <a name="CustomConstraintInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.customConstraintInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint CustomConstraintInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomCustomConstraint</a>

---

##### `PolicyRulesInput`<sup>Optional</sup> <a name="PolicyRulesInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.policyRulesInput"></a>

```csharp
public object PolicyRulesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.get"></a>

```csharp
private SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.putValues">PutValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetAllowAll">ResetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetDenyAll">ResetDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetEnforce">ResetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.putCondition"></a>

```csharp
private void PutCondition(SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a>

---

##### `PutValues` <a name="PutValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.putValues"></a>

```csharp
private void PutValues(SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a>

---

##### `ResetAllowAll` <a name="ResetAllowAll" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetAllowAll"></a>

```csharp
private void ResetAllowAll()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDenyAll` <a name="ResetDenyAll" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetDenyAll"></a>

```csharp
private void ResetDenyAll()
```

##### `ResetEnforce` <a name="ResetEnforce" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetEnforce"></a>

```csharp
private void ResetEnforce()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.values">Values</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.allowAllInput">AllowAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.denyAllInput">DenyAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.enforceInput">EnforceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.valuesInput">ValuesInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.allowAll">AllowAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.denyAll">DenyAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.enforce">Enforce</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.condition"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesConditionOutputReference</a>

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.values"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference Values { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference</a>

---

##### `AllowAllInput`<sup>Optional</sup> <a name="AllowAllInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.allowAllInput"></a>

```csharp
public object AllowAllInput { get; }
```

- *Type:* object

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.conditionInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesCondition</a>

---

##### `DenyAllInput`<sup>Optional</sup> <a name="DenyAllInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.denyAllInput"></a>

```csharp
public object DenyAllInput { get; }
```

- *Type:* object

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.enforceInput"></a>

```csharp
public object EnforceInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.valuesInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues ValuesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a>

---

##### `AllowAll`<sup>Required</sup> <a name="AllowAll" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.allowAll"></a>

```csharp
public object AllowAll { get; }
```

- *Type:* object

---

##### `DenyAll`<sup>Required</sup> <a name="DenyAll" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.denyAll"></a>

```csharp
public object DenyAll { get; }
```

- *Type:* object

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.enforce"></a>

```csharp
public object Enforce { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resetAllowedValues">ResetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resetDeniedValues">ResetDeniedValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedValues` <a name="ResetAllowedValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resetAllowedValues"></a>

```csharp
private void ResetAllowedValues()
```

##### `ResetDeniedValues` <a name="ResetDeniedValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.resetDeniedValues"></a>

```csharp
private void ResetDeniedValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.deniedValuesInput">DeniedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.deniedValues">DeniedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.allowedValuesInput"></a>

```csharp
public string[] AllowedValuesInput { get; }
```

- *Type:* string[]

---

##### `DeniedValuesInput`<sup>Optional</sup> <a name="DeniedValuesInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.deniedValuesInput"></a>

```csharp
public string[] DeniedValuesInput { get; }
```

- *Type:* string[]

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; }
```

- *Type:* string[]

---

##### `DeniedValues`<sup>Required</sup> <a name="DeniedValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.deniedValues"></a>

```csharp
public string[] DeniedValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValuesOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomPolicyRulesValues</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.putPolicyRules">PutPolicyRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicyRules` <a name="PutPolicyRules" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.putPolicyRules"></a>

```csharp
private void PutPolicyRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.putPolicyRules.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.policyRules">PolicyRules</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.cannedConstraintIdInput">CannedConstraintIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.policyRulesInput">PolicyRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.cannedConstraintId">CannedConstraintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyRules`<sup>Required</sup> <a name="PolicyRules" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.policyRules"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList PolicyRules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList</a>

---

##### `CannedConstraintIdInput`<sup>Optional</sup> <a name="CannedConstraintIdInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.cannedConstraintIdInput"></a>

```csharp
public string CannedConstraintIdInput { get; }
```

- *Type:* string

---

##### `PolicyRulesInput`<sup>Optional</sup> <a name="PolicyRulesInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.policyRulesInput"></a>

```csharp
public object PolicyRulesInput { get; }
```

- *Type:* object

---

##### `CannedConstraintId`<sup>Required</sup> <a name="CannedConstraintId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.cannedConstraintId"></a>

```csharp
public string CannedConstraintId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.get"></a>

```csharp
private SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.putValues">PutValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetAllowAll">ResetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetDenyAll">ResetDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetEnforce">ResetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.putCondition"></a>

```csharp
private void PutCondition(SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a>

---

##### `PutValues` <a name="PutValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.putValues"></a>

```csharp
private void PutValues(SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a>

---

##### `ResetAllowAll` <a name="ResetAllowAll" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetAllowAll"></a>

```csharp
private void ResetAllowAll()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDenyAll` <a name="ResetDenyAll" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetDenyAll"></a>

```csharp
private void ResetDenyAll()
```

##### `ResetEnforce` <a name="ResetEnforce" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetEnforce"></a>

```csharp
private void ResetEnforce()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.values">Values</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.allowAllInput">AllowAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.denyAllInput">DenyAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.enforceInput">EnforceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.valuesInput">ValuesInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.allowAll">AllowAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.denyAll">DenyAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.enforce">Enforce</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.condition"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesConditionOutputReference</a>

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.values"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference Values { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference</a>

---

##### `AllowAllInput`<sup>Optional</sup> <a name="AllowAllInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.allowAllInput"></a>

```csharp
public object AllowAllInput { get; }
```

- *Type:* object

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.conditionInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesCondition</a>

---

##### `DenyAllInput`<sup>Optional</sup> <a name="DenyAllInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.denyAllInput"></a>

```csharp
public object DenyAllInput { get; }
```

- *Type:* object

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.enforceInput"></a>

```csharp
public object EnforceInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.valuesInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues ValuesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a>

---

##### `AllowAll`<sup>Required</sup> <a name="AllowAll" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.allowAll"></a>

```csharp
public object AllowAll { get; }
```

- *Type:* object

---

##### `DenyAll`<sup>Required</sup> <a name="DenyAll" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.denyAll"></a>

```csharp
public object DenyAll { get; }
```

- *Type:* object

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.enforce"></a>

```csharp
public object Enforce { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resetAllowedValues">ResetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resetDeniedValues">ResetDeniedValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedValues` <a name="ResetAllowedValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resetAllowedValues"></a>

```csharp
private void ResetAllowedValues()
```

##### `ResetDeniedValues` <a name="ResetDeniedValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.resetDeniedValues"></a>

```csharp
private void ResetDeniedValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.deniedValuesInput">DeniedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.deniedValues">DeniedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.allowedValuesInput"></a>

```csharp
public string[] AllowedValuesInput { get; }
```

- *Type:* string[]

---

##### `DeniedValuesInput`<sup>Optional</sup> <a name="DeniedValuesInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.deniedValuesInput"></a>

```csharp
public string[] DeniedValuesInput { get; }
```

- *Type:* string[]

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; }
```

- *Type:* string[]

---

##### `DeniedValues`<sup>Required</sup> <a name="DeniedValues" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.deniedValues"></a>

```csharp
public string[] DeniedValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValuesOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintPolicyRulesValues</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putOrgPolicyConstraint">PutOrgPolicyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putOrgPolicyConstraintCustom">PutOrgPolicyConstraintCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putSecurityHealthAnalyticsCustomModule">PutSecurityHealthAnalyticsCustomModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putSecurityHealthAnalyticsModule">PutSecurityHealthAnalyticsModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetOrgPolicyConstraint">ResetOrgPolicyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetOrgPolicyConstraintCustom">ResetOrgPolicyConstraintCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetSecurityHealthAnalyticsCustomModule">ResetSecurityHealthAnalyticsCustomModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetSecurityHealthAnalyticsModule">ResetSecurityHealthAnalyticsModule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOrgPolicyConstraint` <a name="PutOrgPolicyConstraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putOrgPolicyConstraint"></a>

```csharp
private void PutOrgPolicyConstraint(SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putOrgPolicyConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a>

---

##### `PutOrgPolicyConstraintCustom` <a name="PutOrgPolicyConstraintCustom" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putOrgPolicyConstraintCustom"></a>

```csharp
private void PutOrgPolicyConstraintCustom(SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putOrgPolicyConstraintCustom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a>

---

##### `PutSecurityHealthAnalyticsCustomModule` <a name="PutSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putSecurityHealthAnalyticsCustomModule"></a>

```csharp
private void PutSecurityHealthAnalyticsCustomModule(SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putSecurityHealthAnalyticsCustomModule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a>

---

##### `PutSecurityHealthAnalyticsModule` <a name="PutSecurityHealthAnalyticsModule" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putSecurityHealthAnalyticsModule"></a>

```csharp
private void PutSecurityHealthAnalyticsModule(SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.putSecurityHealthAnalyticsModule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a>

---

##### `ResetOrgPolicyConstraint` <a name="ResetOrgPolicyConstraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetOrgPolicyConstraint"></a>

```csharp
private void ResetOrgPolicyConstraint()
```

##### `ResetOrgPolicyConstraintCustom` <a name="ResetOrgPolicyConstraintCustom" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetOrgPolicyConstraintCustom"></a>

```csharp
private void ResetOrgPolicyConstraintCustom()
```

##### `ResetSecurityHealthAnalyticsCustomModule` <a name="ResetSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetSecurityHealthAnalyticsCustomModule"></a>

```csharp
private void ResetSecurityHealthAnalyticsCustomModule()
```

##### `ResetSecurityHealthAnalyticsModule` <a name="ResetSecurityHealthAnalyticsModule" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.resetSecurityHealthAnalyticsModule"></a>

```csharp
private void ResetSecurityHealthAnalyticsModule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraint">OrgPolicyConstraint</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraintCustom">OrgPolicyConstraintCustom</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsCustomModule">SecurityHealthAnalyticsCustomModule</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsModule">SecurityHealthAnalyticsModule</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraintCustomInput">OrgPolicyConstraintCustomInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraintInput">OrgPolicyConstraintInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsCustomModuleInput">SecurityHealthAnalyticsCustomModuleInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsModuleInput">SecurityHealthAnalyticsModuleInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint">SecurityposturePosturePolicySetsPoliciesConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrgPolicyConstraint`<sup>Required</sup> <a name="OrgPolicyConstraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraint"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference OrgPolicyConstraint { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintOutputReference</a>

---

##### `OrgPolicyConstraintCustom`<sup>Required</sup> <a name="OrgPolicyConstraintCustom" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraintCustom"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference OrgPolicyConstraintCustom { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustomOutputReference</a>

---

##### `SecurityHealthAnalyticsCustomModule`<sup>Required</sup> <a name="SecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsCustomModule"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference SecurityHealthAnalyticsCustomModule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference</a>

---

##### `SecurityHealthAnalyticsModule`<sup>Required</sup> <a name="SecurityHealthAnalyticsModule" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsModule"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference SecurityHealthAnalyticsModule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference</a>

---

##### `OrgPolicyConstraintCustomInput`<sup>Optional</sup> <a name="OrgPolicyConstraintCustomInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraintCustomInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom OrgPolicyConstraintCustomInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraintCustom</a>

---

##### `OrgPolicyConstraintInput`<sup>Optional</sup> <a name="OrgPolicyConstraintInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.orgPolicyConstraintInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint OrgPolicyConstraintInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint">SecurityposturePosturePolicySetsPoliciesConstraintOrgPolicyConstraint</a>

---

##### `SecurityHealthAnalyticsCustomModuleInput`<sup>Optional</sup> <a name="SecurityHealthAnalyticsCustomModuleInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsCustomModuleInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule SecurityHealthAnalyticsCustomModuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a>

---

##### `SecurityHealthAnalyticsModuleInput`<sup>Optional</sup> <a name="SecurityHealthAnalyticsModuleInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.securityHealthAnalyticsModuleInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule SecurityHealthAnalyticsModuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint">SecurityposturePosturePolicySetsPoliciesConstraint</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.putProperties"></a>

```csharp
private void PutProperties(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* object

---

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.properties"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.propertiesInput"></a>

```csharp
public object PropertiesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.get"></a>

```csharp
private SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.putValueExpression">PutValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.resetValueExpression">ResetValueExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueExpression` <a name="PutValueExpression" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```csharp
private void PutValueExpression(SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a>

---

##### `ResetValueExpression` <a name="ResetValueExpression" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```csharp
private void ResetValueExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">ValueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueExpression`<sup>Required</sup> <a name="ValueExpression" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference ValueExpression { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueExpressionInput`<sup>Optional</sup> <a name="ValueExpressionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression ValueExpressionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertiesValueExpression</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putCustomOutput">PutCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putResourceSelector">PutResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resetCustomOutput">ResetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resetRecommendation">ResetRecommendation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomOutput` <a name="PutCustomOutput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putCustomOutput"></a>

```csharp
private void PutCustomOutput(SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a>

---

##### `PutPredicate` <a name="PutPredicate" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putPredicate"></a>

```csharp
private void PutPredicate(SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a>

---

##### `PutResourceSelector` <a name="PutResourceSelector" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putResourceSelector"></a>

```csharp
private void PutResourceSelector(SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a>

---

##### `ResetCustomOutput` <a name="ResetCustomOutput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resetCustomOutput"></a>

```csharp
private void ResetCustomOutput()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRecommendation` <a name="ResetRecommendation" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.resetRecommendation"></a>

```csharp
private void ResetRecommendation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.customOutputInput">CustomOutputInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.predicateInput">PredicateInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.recommendationInput">RecommendationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.resourceSelectorInput">ResourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.recommendation">Recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomOutput`<sup>Required</sup> <a name="CustomOutput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.customOutput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference CustomOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputOutputReference</a>

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.predicate"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference Predicate { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference</a>

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.resourceSelector"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference ResourceSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference</a>

---

##### `CustomOutputInput`<sup>Optional</sup> <a name="CustomOutputInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.customOutputInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput CustomOutputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.predicateInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate PredicateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a>

---

##### `RecommendationInput`<sup>Optional</sup> <a name="RecommendationInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.recommendationInput"></a>

```csharp
public string RecommendationInput { get; }
```

- *Type:* string

---

##### `ResourceSelectorInput`<sup>Optional</sup> <a name="ResourceSelectorInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.resourceSelectorInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector ResourceSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a>

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.recommendation"></a>

```csharp
public string Recommendation { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicateOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigPredicate</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelectorOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resetModuleEnablementState">ResetModuleEnablementState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.putConfig"></a>

```csharp
private void PutConfig(SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetModuleEnablementState` <a name="ResetModuleEnablementState" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.resetModuleEnablementState"></a>

```csharp
private void ResetModuleEnablementState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.moduleEnablementStateInput">ModuleEnablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.moduleEnablementState">ModuleEnablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.config"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.configInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleConfig</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ModuleEnablementStateInput`<sup>Optional</sup> <a name="ModuleEnablementStateInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.moduleEnablementStateInput"></a>

```csharp
public string ModuleEnablementStateInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ModuleEnablementState`<sup>Required</sup> <a name="ModuleEnablementState" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.moduleEnablementState"></a>

```csharp
public string ModuleEnablementState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModuleOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsCustomModule</a>

---


### SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference <a name="SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.resetModuleEnablementState">ResetModuleEnablementState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModuleEnablementState` <a name="ResetModuleEnablementState" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.resetModuleEnablementState"></a>

```csharp
private void ResetModuleEnablementState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleEnablementStateInput">ModuleEnablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleNameInput">ModuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleEnablementState">ModuleEnablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleName">ModuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModuleEnablementStateInput`<sup>Optional</sup> <a name="ModuleEnablementStateInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleEnablementStateInput"></a>

```csharp
public string ModuleEnablementStateInput { get; }
```

- *Type:* string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleNameInput"></a>

```csharp
public string ModuleNameInput { get; }
```

- *Type:* string

---

##### `ModuleEnablementState`<sup>Required</sup> <a name="ModuleEnablementState" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleEnablementState"></a>

```csharp
public string ModuleEnablementState { get; }
```

- *Type:* string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.moduleName"></a>

```csharp
public string ModuleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModuleOutputReference.property.internalValue"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule">SecurityposturePosturePolicySetsPoliciesConstraintSecurityHealthAnalyticsModule</a>

---


### SecurityposturePosturePolicySetsPoliciesList <a name="SecurityposturePosturePolicySetsPoliciesList" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.get"></a>

```csharp
private SecurityposturePosturePolicySetsPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityposturePosturePolicySetsPoliciesOutputReference <a name="SecurityposturePosturePolicySetsPoliciesOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePosturePolicySetsPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.putComplianceStandards">PutComplianceStandards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.putConstraint">PutConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.resetComplianceStandards">ResetComplianceStandards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComplianceStandards` <a name="PutComplianceStandards" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.putComplianceStandards"></a>

```csharp
private void PutComplianceStandards(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.putComplianceStandards.parameter.value"></a>

- *Type:* object

---

##### `PutConstraint` <a name="PutConstraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.putConstraint"></a>

```csharp
private void PutConstraint(SecurityposturePosturePolicySetsPoliciesConstraint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.putConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint">SecurityposturePosturePolicySetsPoliciesConstraint</a>

---

##### `ResetComplianceStandards` <a name="ResetComplianceStandards" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.resetComplianceStandards"></a>

```csharp
private void ResetComplianceStandards()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.complianceStandards">ComplianceStandards</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList">SecurityposturePosturePolicySetsPoliciesComplianceStandardsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.constraint">Constraint</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.complianceStandardsInput">ComplianceStandardsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.constraintInput">ConstraintInput</a></code> | <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint">SecurityposturePosturePolicySetsPoliciesConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComplianceStandards`<sup>Required</sup> <a name="ComplianceStandards" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.complianceStandards"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesComplianceStandardsList ComplianceStandards { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesComplianceStandardsList">SecurityposturePosturePolicySetsPoliciesComplianceStandardsList</a>

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.constraint"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraintOutputReference Constraint { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraintOutputReference">SecurityposturePosturePolicySetsPoliciesConstraintOutputReference</a>

---

##### `ComplianceStandardsInput`<sup>Optional</sup> <a name="ComplianceStandardsInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.complianceStandardsInput"></a>

```csharp
public object ComplianceStandardsInput { get; }
```

- *Type:* object

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.constraintInput"></a>

```csharp
public SecurityposturePosturePolicySetsPoliciesConstraint ConstraintInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesConstraint">SecurityposturePosturePolicySetsPoliciesConstraint</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePosturePolicySetsPoliciesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecurityposturePostureTimeoutsOutputReference <a name="SecurityposturePostureTimeoutsOutputReference" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecurityposturePostureTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.securityposturePosture.SecurityposturePostureTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



