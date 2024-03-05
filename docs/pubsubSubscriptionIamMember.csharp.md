# `pubsubSubscriptionIamMember` Submodule <a name="`pubsubSubscriptionIamMember` Submodule" id="@cdktf/provider-google.pubsubSubscriptionIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubSubscriptionIamMember <a name="PubsubSubscriptionIamMember" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member google_pubsub_subscription_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionIamMember(Construct Scope, string Id, PubsubSubscriptionIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig">PubsubSubscriptionIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig">PubsubSubscriptionIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.putCondition"></a>

```csharp
private void PutCondition(PubsubSubscriptionIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition">PubsubSubscriptionIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PubsubSubscriptionIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PubsubSubscriptionIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PubsubSubscriptionIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PubsubSubscriptionIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PubsubSubscriptionIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PubsubSubscriptionIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PubsubSubscriptionIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PubsubSubscriptionIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PubsubSubscriptionIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference">PubsubSubscriptionIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition">PubsubSubscriptionIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.subscriptionInput">SubscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.subscription">Subscription</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.condition"></a>

```csharp
public PubsubSubscriptionIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference">PubsubSubscriptionIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.conditionInput"></a>

```csharp
public PubsubSubscriptionIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition">PubsubSubscriptionIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SubscriptionInput`<sup>Optional</sup> <a name="SubscriptionInput" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.subscriptionInput"></a>

```csharp
public string SubscriptionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.subscription"></a>

```csharp
public string Subscription { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubSubscriptionIamMemberCondition <a name="PubsubSubscriptionIamMemberCondition" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#expression PubsubSubscriptionIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#title PubsubSubscriptionIamMember#title}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#description PubsubSubscriptionIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#expression PubsubSubscriptionIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#title PubsubSubscriptionIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#description PubsubSubscriptionIamMember#description}.

---

### PubsubSubscriptionIamMemberConfig <a name="PubsubSubscriptionIamMemberConfig" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Member,
    string Role,
    string Subscription,
    PubsubSubscriptionIamMemberCondition Condition = null,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#member PubsubSubscriptionIamMember#member}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#role PubsubSubscriptionIamMember#role}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.subscription">Subscription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#subscription PubsubSubscriptionIamMember#subscription}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition">PubsubSubscriptionIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#id PubsubSubscriptionIamMember#id}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#project PubsubSubscriptionIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#member PubsubSubscriptionIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#role PubsubSubscriptionIamMember#role}.

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.subscription"></a>

```csharp
public string Subscription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#subscription PubsubSubscriptionIamMember#subscription}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.condition"></a>

```csharp
public PubsubSubscriptionIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition">PubsubSubscriptionIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#condition PubsubSubscriptionIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#id PubsubSubscriptionIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/pubsub_subscription_iam_member#project PubsubSubscriptionIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubSubscriptionIamMemberConditionOutputReference <a name="PubsubSubscriptionIamMemberConditionOutputReference" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PubsubSubscriptionIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition">PubsubSubscriptionIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public PubsubSubscriptionIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscriptionIamMember.PubsubSubscriptionIamMemberCondition">PubsubSubscriptionIamMemberCondition</a>

---



