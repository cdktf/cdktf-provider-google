# `orgPolicyPolicy` Submodule <a name="`orgPolicyPolicy` Submodule" id="@cdktf/provider-google.orgPolicyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgPolicyPolicy <a name="OrgPolicyPolicy" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy google_org_policy_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicy(Construct Scope, string Id, OrgPolicyPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig">OrgPolicyPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig">OrgPolicyPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec">PutDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetDryRunSpec">ResetDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetSpec">ResetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDryRunSpec` <a name="PutDryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec"></a>

```csharp
private void PutDryRunSpec(OrgPolicyPolicyDryRunSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec"></a>

```csharp
private void PutSpec(OrgPolicyPolicySpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(OrgPolicyPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>

---

##### `ResetDryRunSpec` <a name="ResetDryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetDryRunSpec"></a>

```csharp
private void ResetDryRunSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetSpec"></a>

```csharp
private void ResetSpec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OrgPolicyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OrgPolicyPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OrgPolicyPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OrgPolicyPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OrgPolicyPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OrgPolicyPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrgPolicyPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrgPolicyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OrgPolicyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpec">DryRunSpec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference">OrgPolicyPolicyDryRunSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference">OrgPolicyPolicySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference">OrgPolicyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpecInput">DryRunSpecInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DryRunSpec`<sup>Required</sup> <a name="DryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpec"></a>

```csharp
public OrgPolicyPolicyDryRunSpecOutputReference DryRunSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference">OrgPolicyPolicyDryRunSpecOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.spec"></a>

```csharp
public OrgPolicyPolicySpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference">OrgPolicyPolicySpecOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeouts"></a>

```csharp
public OrgPolicyPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference">OrgPolicyPolicyTimeoutsOutputReference</a>

---

##### `DryRunSpecInput`<sup>Optional</sup> <a name="DryRunSpecInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpecInput"></a>

```csharp
public OrgPolicyPolicyDryRunSpec DryRunSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.specInput"></a>

```csharp
public OrgPolicyPolicySpec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrgPolicyPolicyConfig <a name="OrgPolicyPolicyConfig" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Parent,
    OrgPolicyPolicyDryRunSpec DryRunSpec = null,
    string Id = null,
    OrgPolicyPolicySpec Spec = null,
    OrgPolicyPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.name">Name</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.parent">Parent</a></code> | <code>string</code> | The parent of the resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dryRunSpec">DryRunSpec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | dry_run_spec block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#id OrgPolicyPolicy#id}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Immutable.

The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * 'projects/{project_number}/policies/{constraint_name}' * 'folders/{folder_id}/policies/{constraint_name}' * 'organizations/{organization_id}/policies/{constraint_name}' For example, "projects/123/policies/compute.disableSerialPortAccess". Note: 'projects/{project_id}/policies/{constraint_name}' is also an acceptable name for API requests, but responses will return the name using the equivalent project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#name OrgPolicyPolicy#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#parent OrgPolicyPolicy#parent}

---

##### `DryRunSpec`<sup>Optional</sup> <a name="DryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dryRunSpec"></a>

```csharp
public OrgPolicyPolicyDryRunSpec DryRunSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

dry_run_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#dry_run_spec OrgPolicyPolicy#dry_run_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#id OrgPolicyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.spec"></a>

```csharp
public OrgPolicyPolicySpec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#spec OrgPolicyPolicy#spec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.timeouts"></a>

```csharp
public OrgPolicyPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#timeouts OrgPolicyPolicy#timeouts}

---

### OrgPolicyPolicyDryRunSpec <a name="OrgPolicyPolicyDryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicyDryRunSpec {
    object InheritFromParent = null,
    object Reset = null,
    object Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.inheritFromParent">InheritFromParent</a></code> | <code>object</code> | Determines the inheritance behavior for this policy. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.reset">Reset</a></code> | <code>object</code> | Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific constraint at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.rules">Rules</a></code> | <code>object</code> | rules block. |

---

##### `InheritFromParent`<sup>Optional</sup> <a name="InheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.inheritFromParent"></a>

```csharp
public object InheritFromParent { get; set; }
```

- *Type:* object

Determines the inheritance behavior for this policy.

If 'inherit_from_parent' is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#inherit_from_parent OrgPolicyPolicy#inherit_from_parent}

---

##### `Reset`<sup>Optional</sup> <a name="Reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.reset"></a>

```csharp
public object Reset { get; set; }
```

- *Type:* object

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific constraint at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#reset OrgPolicyPolicy#reset}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#rules OrgPolicyPolicy#rules}

---

### OrgPolicyPolicyDryRunSpecRules <a name="OrgPolicyPolicyDryRunSpecRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicyDryRunSpecRules {
    string AllowAll = null,
    OrgPolicyPolicyDryRunSpecRulesCondition Condition = null,
    string DenyAll = null,
    string Enforce = null,
    OrgPolicyPolicyDryRunSpecRulesValues Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.allowAll">AllowAll</a></code> | <code>string</code> | Setting this to '"TRUE"' means that all values are allowed. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.denyAll">DenyAll</a></code> | <code>string</code> | Setting this to '"TRUE"' means that all values are denied. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.enforce">Enforce</a></code> | <code>string</code> | If '"TRUE"', then the 'Policy' is enforced. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.values">Values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a></code> | values block. |

---

##### `AllowAll`<sup>Optional</sup> <a name="AllowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.allowAll"></a>

```csharp
public string AllowAll { get; set; }
```

- *Type:* string

Setting this to '"TRUE"' means that all values are allowed.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#allow_all OrgPolicyPolicy#allow_all}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.condition"></a>

```csharp
public OrgPolicyPolicyDryRunSpecRulesCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#condition OrgPolicyPolicy#condition}

---

##### `DenyAll`<sup>Optional</sup> <a name="DenyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.denyAll"></a>

```csharp
public string DenyAll { get; set; }
```

- *Type:* string

Setting this to '"TRUE"' means that all values are denied.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#deny_all OrgPolicyPolicy#deny_all}

---

##### `Enforce`<sup>Optional</sup> <a name="Enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.enforce"></a>

```csharp
public string Enforce { get; set; }
```

- *Type:* string

If '"TRUE"', then the 'Policy' is enforced.

If '"FALSE"', then any configuration is acceptable. This field can be set only in Policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#enforce OrgPolicyPolicy#enforce}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.values"></a>

```csharp
public OrgPolicyPolicyDryRunSpecRulesValues Values { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#values OrgPolicyPolicy#values}

---

### OrgPolicyPolicyDryRunSpecRulesCondition <a name="OrgPolicyPolicyDryRunSpecRulesCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicyDryRunSpecRulesCondition {
    string Description = null,
    string Expression = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.description">Description</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.location">Location</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.title">Title</a></code> | <code>string</code> | Optional. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#description OrgPolicyPolicy#description}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#expression OrgPolicyPolicy#expression}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#location OrgPolicyPolicy#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#title OrgPolicyPolicy#title}

---

### OrgPolicyPolicyDryRunSpecRulesValues <a name="OrgPolicyPolicyDryRunSpecRulesValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicyDryRunSpecRulesValues {
    string[] AllowedValues = null,
    string[] DeniedValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.deniedValues">DeniedValues</a></code> | <code>string[]</code> | List of values denied at this resource. |

---

##### `AllowedValues`<sup>Optional</sup> <a name="AllowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; set; }
```

- *Type:* string[]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#allowed_values OrgPolicyPolicy#allowed_values}

---

##### `DeniedValues`<sup>Optional</sup> <a name="DeniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.deniedValues"></a>

```csharp
public string[] DeniedValues { get; set; }
```

- *Type:* string[]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#denied_values OrgPolicyPolicy#denied_values}

---

### OrgPolicyPolicySpec <a name="OrgPolicyPolicySpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicySpec {
    object InheritFromParent = null,
    object Reset = null,
    object Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.inheritFromParent">InheritFromParent</a></code> | <code>object</code> | Determines the inheritance behavior for this 'Policy'. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.reset">Reset</a></code> | <code>object</code> | Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific 'Constraint' at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.rules">Rules</a></code> | <code>object</code> | rules block. |

---

##### `InheritFromParent`<sup>Optional</sup> <a name="InheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.inheritFromParent"></a>

```csharp
public object InheritFromParent { get; set; }
```

- *Type:* object

Determines the inheritance behavior for this 'Policy'.

If 'inherit_from_parent' is true, PolicyRules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this Policy becomes the new root for evaluation. This field can be set only for Policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#inherit_from_parent OrgPolicyPolicy#inherit_from_parent}

---

##### `Reset`<sup>Optional</sup> <a name="Reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.reset"></a>

```csharp
public object Reset { get; set; }
```

- *Type:* object

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific 'Constraint' at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#reset OrgPolicyPolicy#reset}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#rules OrgPolicyPolicy#rules}

---

### OrgPolicyPolicySpecRules <a name="OrgPolicyPolicySpecRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicySpecRules {
    string AllowAll = null,
    OrgPolicyPolicySpecRulesCondition Condition = null,
    string DenyAll = null,
    string Enforce = null,
    OrgPolicyPolicySpecRulesValues Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.allowAll">AllowAll</a></code> | <code>string</code> | Setting this to '"TRUE"' means that all values are allowed. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.denyAll">DenyAll</a></code> | <code>string</code> | Setting this to '"TRUE"' means that all values are denied. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.enforce">Enforce</a></code> | <code>string</code> | If '"TRUE"', then the 'Policy' is enforced. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.values">Values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a></code> | values block. |

---

##### `AllowAll`<sup>Optional</sup> <a name="AllowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.allowAll"></a>

```csharp
public string AllowAll { get; set; }
```

- *Type:* string

Setting this to '"TRUE"' means that all values are allowed.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#allow_all OrgPolicyPolicy#allow_all}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.condition"></a>

```csharp
public OrgPolicyPolicySpecRulesCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#condition OrgPolicyPolicy#condition}

---

##### `DenyAll`<sup>Optional</sup> <a name="DenyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.denyAll"></a>

```csharp
public string DenyAll { get; set; }
```

- *Type:* string

Setting this to '"TRUE"' means that all values are denied.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#deny_all OrgPolicyPolicy#deny_all}

---

##### `Enforce`<sup>Optional</sup> <a name="Enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.enforce"></a>

```csharp
public string Enforce { get; set; }
```

- *Type:* string

If '"TRUE"', then the 'Policy' is enforced.

If '"FALSE"', then any configuration is acceptable. This field can be set only in Policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#enforce OrgPolicyPolicy#enforce}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.values"></a>

```csharp
public OrgPolicyPolicySpecRulesValues Values { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#values OrgPolicyPolicy#values}

---

### OrgPolicyPolicySpecRulesCondition <a name="OrgPolicyPolicySpecRulesCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicySpecRulesCondition {
    string Description = null,
    string Expression = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.description">Description</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.location">Location</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.title">Title</a></code> | <code>string</code> | Optional. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#description OrgPolicyPolicy#description}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#expression OrgPolicyPolicy#expression}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#location OrgPolicyPolicy#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#title OrgPolicyPolicy#title}

---

### OrgPolicyPolicySpecRulesValues <a name="OrgPolicyPolicySpecRulesValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicySpecRulesValues {
    string[] AllowedValues = null,
    string[] DeniedValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.deniedValues">DeniedValues</a></code> | <code>string[]</code> | List of values denied at this resource. |

---

##### `AllowedValues`<sup>Optional</sup> <a name="AllowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; set; }
```

- *Type:* string[]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#allowed_values OrgPolicyPolicy#allowed_values}

---

##### `DeniedValues`<sup>Optional</sup> <a name="DeniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.deniedValues"></a>

```csharp
public string[] DeniedValues { get; set; }
```

- *Type:* string[]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#denied_values OrgPolicyPolicy#denied_values}

---

### OrgPolicyPolicyTimeouts <a name="OrgPolicyPolicyTimeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#create OrgPolicyPolicy#create}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#delete OrgPolicyPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#update OrgPolicyPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#create OrgPolicyPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#delete OrgPolicyPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#update OrgPolicyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrgPolicyPolicyDryRunSpecOutputReference <a name="OrgPolicyPolicyDryRunSpecOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicyDryRunSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetInheritFromParent">ResetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetReset">ResetReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.putRules.parameter.value"></a>

- *Type:* object

---

##### `ResetInheritFromParent` <a name="ResetInheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetInheritFromParent"></a>

```csharp
private void ResetInheritFromParent()
```

##### `ResetReset` <a name="ResetReset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetReset"></a>

```csharp
private void ResetReset()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetRules"></a>

```csharp
private void ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList">OrgPolicyPolicyDryRunSpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParentInput">InheritFromParentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.resetInput">ResetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParent">InheritFromParent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.reset">Reset</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rules"></a>

```csharp
public OrgPolicyPolicyDryRunSpecRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList">OrgPolicyPolicyDryRunSpecRulesList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InheritFromParentInput`<sup>Optional</sup> <a name="InheritFromParentInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParentInput"></a>

```csharp
public object InheritFromParentInput { get; }
```

- *Type:* object

---

##### `ResetInput`<sup>Optional</sup> <a name="ResetInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.resetInput"></a>

```csharp
public object ResetInput { get; }
```

- *Type:* object

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `InheritFromParent`<sup>Required</sup> <a name="InheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParent"></a>

```csharp
public object InheritFromParent { get; }
```

- *Type:* object

---

##### `Reset`<sup>Required</sup> <a name="Reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.reset"></a>

```csharp
public object Reset { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.internalValue"></a>

```csharp
public OrgPolicyPolicyDryRunSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

---


### OrgPolicyPolicyDryRunSpecRulesConditionOutputReference <a name="OrgPolicyPolicyDryRunSpecRulesConditionOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicyDryRunSpecRulesConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.internalValue"></a>

```csharp
public OrgPolicyPolicyDryRunSpecRulesCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

---


### OrgPolicyPolicyDryRunSpecRulesList <a name="OrgPolicyPolicyDryRunSpecRulesList" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicyDryRunSpecRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.get"></a>

```csharp
private OrgPolicyPolicyDryRunSpecRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrgPolicyPolicyDryRunSpecRulesOutputReference <a name="OrgPolicyPolicyDryRunSpecRulesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicyDryRunSpecRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putValues">PutValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetAllowAll">ResetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetDenyAll">ResetDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetEnforce">ResetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition"></a>

```csharp
private void PutCondition(OrgPolicyPolicyDryRunSpecRulesCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

---

##### `PutValues` <a name="PutValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putValues"></a>

```csharp
private void PutValues(OrgPolicyPolicyDryRunSpecRulesValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

---

##### `ResetAllowAll` <a name="ResetAllowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetAllowAll"></a>

```csharp
private void ResetAllowAll()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDenyAll` <a name="ResetDenyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetDenyAll"></a>

```csharp
private void ResetDenyAll()
```

##### `ResetEnforce` <a name="ResetEnforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetEnforce"></a>

```csharp
private void ResetEnforce()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference">OrgPolicyPolicyDryRunSpecRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.values">Values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference">OrgPolicyPolicyDryRunSpecRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAllInput">AllowAllInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAllInput">DenyAllInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforceInput">EnforceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.valuesInput">ValuesInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAll">AllowAll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAll">DenyAll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforce">Enforce</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.condition"></a>

```csharp
public OrgPolicyPolicyDryRunSpecRulesConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference">OrgPolicyPolicyDryRunSpecRulesConditionOutputReference</a>

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.values"></a>

```csharp
public OrgPolicyPolicyDryRunSpecRulesValuesOutputReference Values { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference">OrgPolicyPolicyDryRunSpecRulesValuesOutputReference</a>

---

##### `AllowAllInput`<sup>Optional</sup> <a name="AllowAllInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAllInput"></a>

```csharp
public string AllowAllInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.conditionInput"></a>

```csharp
public OrgPolicyPolicyDryRunSpecRulesCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

---

##### `DenyAllInput`<sup>Optional</sup> <a name="DenyAllInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAllInput"></a>

```csharp
public string DenyAllInput { get; }
```

- *Type:* string

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforceInput"></a>

```csharp
public string EnforceInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.valuesInput"></a>

```csharp
public OrgPolicyPolicyDryRunSpecRulesValues ValuesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

---

##### `AllowAll`<sup>Required</sup> <a name="AllowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAll"></a>

```csharp
public string AllowAll { get; }
```

- *Type:* string

---

##### `DenyAll`<sup>Required</sup> <a name="DenyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAll"></a>

```csharp
public string DenyAll { get; }
```

- *Type:* string

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforce"></a>

```csharp
public string Enforce { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrgPolicyPolicyDryRunSpecRulesValuesOutputReference <a name="OrgPolicyPolicyDryRunSpecRulesValuesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicyDryRunSpecRulesValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetAllowedValues">ResetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetDeniedValues">ResetDeniedValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedValues` <a name="ResetAllowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetAllowedValues"></a>

```csharp
private void ResetAllowedValues()
```

##### `ResetDeniedValues` <a name="ResetDeniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetDeniedValues"></a>

```csharp
private void ResetDeniedValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValuesInput">DeniedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValues">DeniedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValuesInput"></a>

```csharp
public string[] AllowedValuesInput { get; }
```

- *Type:* string[]

---

##### `DeniedValuesInput`<sup>Optional</sup> <a name="DeniedValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValuesInput"></a>

```csharp
public string[] DeniedValuesInput { get; }
```

- *Type:* string[]

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; }
```

- *Type:* string[]

---

##### `DeniedValues`<sup>Required</sup> <a name="DeniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValues"></a>

```csharp
public string[] DeniedValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.internalValue"></a>

```csharp
public OrgPolicyPolicyDryRunSpecRulesValues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

---


### OrgPolicyPolicySpecOutputReference <a name="OrgPolicyPolicySpecOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicySpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetInheritFromParent">ResetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetReset">ResetReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.putRules.parameter.value"></a>

- *Type:* object

---

##### `ResetInheritFromParent` <a name="ResetInheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetInheritFromParent"></a>

```csharp
private void ResetInheritFromParent()
```

##### `ResetReset` <a name="ResetReset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetReset"></a>

```csharp
private void ResetReset()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetRules"></a>

```csharp
private void ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList">OrgPolicyPolicySpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParentInput">InheritFromParentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.resetInput">ResetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParent">InheritFromParent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.reset">Reset</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rules"></a>

```csharp
public OrgPolicyPolicySpecRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList">OrgPolicyPolicySpecRulesList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InheritFromParentInput`<sup>Optional</sup> <a name="InheritFromParentInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParentInput"></a>

```csharp
public object InheritFromParentInput { get; }
```

- *Type:* object

---

##### `ResetInput`<sup>Optional</sup> <a name="ResetInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.resetInput"></a>

```csharp
public object ResetInput { get; }
```

- *Type:* object

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `InheritFromParent`<sup>Required</sup> <a name="InheritFromParent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParent"></a>

```csharp
public object InheritFromParent { get; }
```

- *Type:* object

---

##### `Reset`<sup>Required</sup> <a name="Reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.reset"></a>

```csharp
public object Reset { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.internalValue"></a>

```csharp
public OrgPolicyPolicySpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

---


### OrgPolicyPolicySpecRulesConditionOutputReference <a name="OrgPolicyPolicySpecRulesConditionOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicySpecRulesConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue"></a>

```csharp
public OrgPolicyPolicySpecRulesCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

---


### OrgPolicyPolicySpecRulesList <a name="OrgPolicyPolicySpecRulesList" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicySpecRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.get"></a>

```csharp
private OrgPolicyPolicySpecRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrgPolicyPolicySpecRulesOutputReference <a name="OrgPolicyPolicySpecRulesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicySpecRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putValues">PutValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetAllowAll">ResetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetDenyAll">ResetDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetEnforce">ResetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition"></a>

```csharp
private void PutCondition(OrgPolicyPolicySpecRulesCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

---

##### `PutValues` <a name="PutValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putValues"></a>

```csharp
private void PutValues(OrgPolicyPolicySpecRulesValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

---

##### `ResetAllowAll` <a name="ResetAllowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetAllowAll"></a>

```csharp
private void ResetAllowAll()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDenyAll` <a name="ResetDenyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetDenyAll"></a>

```csharp
private void ResetDenyAll()
```

##### `ResetEnforce` <a name="ResetEnforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetEnforce"></a>

```csharp
private void ResetEnforce()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference">OrgPolicyPolicySpecRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.values">Values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference">OrgPolicyPolicySpecRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAllInput">AllowAllInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAllInput">DenyAllInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforceInput">EnforceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.valuesInput">ValuesInput</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAll">AllowAll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAll">DenyAll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforce">Enforce</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.condition"></a>

```csharp
public OrgPolicyPolicySpecRulesConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference">OrgPolicyPolicySpecRulesConditionOutputReference</a>

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.values"></a>

```csharp
public OrgPolicyPolicySpecRulesValuesOutputReference Values { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference">OrgPolicyPolicySpecRulesValuesOutputReference</a>

---

##### `AllowAllInput`<sup>Optional</sup> <a name="AllowAllInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAllInput"></a>

```csharp
public string AllowAllInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.conditionInput"></a>

```csharp
public OrgPolicyPolicySpecRulesCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

---

##### `DenyAllInput`<sup>Optional</sup> <a name="DenyAllInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAllInput"></a>

```csharp
public string DenyAllInput { get; }
```

- *Type:* string

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforceInput"></a>

```csharp
public string EnforceInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.valuesInput"></a>

```csharp
public OrgPolicyPolicySpecRulesValues ValuesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

---

##### `AllowAll`<sup>Required</sup> <a name="AllowAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAll"></a>

```csharp
public string AllowAll { get; }
```

- *Type:* string

---

##### `DenyAll`<sup>Required</sup> <a name="DenyAll" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAll"></a>

```csharp
public string DenyAll { get; }
```

- *Type:* string

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforce"></a>

```csharp
public string Enforce { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrgPolicyPolicySpecRulesValuesOutputReference <a name="OrgPolicyPolicySpecRulesValuesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicySpecRulesValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues">ResetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues">ResetDeniedValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedValues` <a name="ResetAllowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues"></a>

```csharp
private void ResetAllowedValues()
```

##### `ResetDeniedValues` <a name="ResetDeniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues"></a>

```csharp
private void ResetDeniedValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput">DeniedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues">AllowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues">DeniedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput"></a>

```csharp
public string[] AllowedValuesInput { get; }
```

- *Type:* string[]

---

##### `DeniedValuesInput`<sup>Optional</sup> <a name="DeniedValuesInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput"></a>

```csharp
public string[] DeniedValuesInput { get; }
```

- *Type:* string[]

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues"></a>

```csharp
public string[] AllowedValues { get; }
```

- *Type:* string[]

---

##### `DeniedValues`<sup>Required</sup> <a name="DeniedValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues"></a>

```csharp
public string[] DeniedValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue"></a>

```csharp
public OrgPolicyPolicySpecRulesValues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

---


### OrgPolicyPolicyTimeoutsOutputReference <a name="OrgPolicyPolicyTimeoutsOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrgPolicyPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



