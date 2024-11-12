# `binaryAuthorizationPolicy` Submodule <a name="`binaryAuthorizationPolicy` Submodule" id="@cdktf/provider-google.binaryAuthorizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BinaryAuthorizationPolicy <a name="BinaryAuthorizationPolicy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy google_binary_authorization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationPolicy(Construct Scope, string Id, BinaryAuthorizationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig">BinaryAuthorizationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig">BinaryAuthorizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putAdmissionWhitelistPatterns">PutAdmissionWhitelistPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putClusterAdmissionRules">PutClusterAdmissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule">PutDefaultAdmissionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns">ResetAdmissionWhitelistPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetClusterAdmissionRules">ResetClusterAdmissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode">ResetGlobalPolicyEvaluationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdmissionWhitelistPatterns` <a name="PutAdmissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putAdmissionWhitelistPatterns"></a>

```csharp
private void PutAdmissionWhitelistPatterns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putAdmissionWhitelistPatterns.parameter.value"></a>

- *Type:* object

---

##### `PutClusterAdmissionRules` <a name="PutClusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putClusterAdmissionRules"></a>

```csharp
private void PutClusterAdmissionRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putClusterAdmissionRules.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultAdmissionRule` <a name="PutDefaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule"></a>

```csharp
private void PutDefaultAdmissionRule(BinaryAuthorizationPolicyDefaultAdmissionRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(BinaryAuthorizationPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

---

##### `ResetAdmissionWhitelistPatterns` <a name="ResetAdmissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns"></a>

```csharp
private void ResetAdmissionWhitelistPatterns()
```

##### `ResetClusterAdmissionRules` <a name="ResetClusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetClusterAdmissionRules"></a>

```csharp
private void ResetClusterAdmissionRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGlobalPolicyEvaluationMode` <a name="ResetGlobalPolicyEvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode"></a>

```csharp
private void ResetGlobalPolicyEvaluationMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BinaryAuthorizationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BinaryAuthorizationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BinaryAuthorizationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BinaryAuthorizationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BinaryAuthorizationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BinaryAuthorizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BinaryAuthorizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatterns">AdmissionWhitelistPatterns</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList">BinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRules">ClusterAdmissionRules</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList">BinaryAuthorizationPolicyClusterAdmissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRule">DefaultAdmissionRule</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference">BinaryAuthorizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput">AdmissionWhitelistPatternsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRulesInput">ClusterAdmissionRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRuleInput">DefaultAdmissionRuleInput</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput">GlobalPolicyEvaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationMode">GlobalPolicyEvaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdmissionWhitelistPatterns`<sup>Required</sup> <a name="AdmissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatterns"></a>

```csharp
public BinaryAuthorizationPolicyAdmissionWhitelistPatternsList AdmissionWhitelistPatterns { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList">BinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a>

---

##### `ClusterAdmissionRules`<sup>Required</sup> <a name="ClusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRules"></a>

```csharp
public BinaryAuthorizationPolicyClusterAdmissionRulesList ClusterAdmissionRules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList">BinaryAuthorizationPolicyClusterAdmissionRulesList</a>

---

##### `DefaultAdmissionRule`<sup>Required</sup> <a name="DefaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRule"></a>

```csharp
public BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference DefaultAdmissionRule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeouts"></a>

```csharp
public BinaryAuthorizationPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference">BinaryAuthorizationPolicyTimeoutsOutputReference</a>

---

##### `AdmissionWhitelistPatternsInput`<sup>Optional</sup> <a name="AdmissionWhitelistPatternsInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput"></a>

```csharp
public object AdmissionWhitelistPatternsInput { get; }
```

- *Type:* object

---

##### `ClusterAdmissionRulesInput`<sup>Optional</sup> <a name="ClusterAdmissionRulesInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRulesInput"></a>

```csharp
public object ClusterAdmissionRulesInput { get; }
```

- *Type:* object

---

##### `DefaultAdmissionRuleInput`<sup>Optional</sup> <a name="DefaultAdmissionRuleInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRuleInput"></a>

```csharp
public BinaryAuthorizationPolicyDefaultAdmissionRule DefaultAdmissionRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GlobalPolicyEvaluationModeInput`<sup>Optional</sup> <a name="GlobalPolicyEvaluationModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput"></a>

```csharp
public string GlobalPolicyEvaluationModeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GlobalPolicyEvaluationMode`<sup>Required</sup> <a name="GlobalPolicyEvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationMode"></a>

```csharp
public string GlobalPolicyEvaluationMode { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BinaryAuthorizationPolicyAdmissionWhitelistPatterns <a name="BinaryAuthorizationPolicyAdmissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationPolicyAdmissionWhitelistPatterns {
    string NamePattern
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern">NamePattern</a></code> | <code>string</code> | An image name pattern to whitelist, in the form 'registry/path/to/image'. |

---

##### `NamePattern`<sup>Required</sup> <a name="NamePattern" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern"></a>

```csharp
public string NamePattern { get; set; }
```

- *Type:* string

An image name pattern to whitelist, in the form 'registry/path/to/image'.

This supports a trailing * as a
wildcard, but this is allowed only in text after the registry/
part.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#name_pattern BinaryAuthorizationPolicy#name_pattern}

---

### BinaryAuthorizationPolicyClusterAdmissionRules <a name="BinaryAuthorizationPolicyClusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationPolicyClusterAdmissionRules {
    string Cluster,
    string EnforcementMode,
    string EvaluationMode,
    string[] RequireAttestationsBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.cluster">Cluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#cluster BinaryAuthorizationPolicy#cluster}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode">EnforcementMode</a></code> | <code>string</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode">EvaluationMode</a></code> | <code>string</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy">RequireAttestationsBy</a></code> | <code>string[]</code> | The resource names of the attestors that must attest to a container image. |

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#cluster BinaryAuthorizationPolicy#cluster}.

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode"></a>

```csharp
public string EnforcementMode { get; set; }
```

- *Type:* string

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#enforcement_mode BinaryAuthorizationPolicy#enforcement_mode}

---

##### `EvaluationMode`<sup>Required</sup> <a name="EvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode"></a>

```csharp
public string EvaluationMode { get; set; }
```

- *Type:* string

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#evaluation_mode BinaryAuthorizationPolicy#evaluation_mode}

---

##### `RequireAttestationsBy`<sup>Optional</sup> <a name="RequireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy"></a>

```csharp
public string[] RequireAttestationsBy { get; set; }
```

- *Type:* string[]

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#require_attestations_by BinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### BinaryAuthorizationPolicyConfig <a name="BinaryAuthorizationPolicyConfig" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    BinaryAuthorizationPolicyDefaultAdmissionRule DefaultAdmissionRule,
    object AdmissionWhitelistPatterns = null,
    object ClusterAdmissionRules = null,
    string Description = null,
    string GlobalPolicyEvaluationMode = null,
    string Id = null,
    string Project = null,
    BinaryAuthorizationPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.defaultAdmissionRule">DefaultAdmissionRule</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | default_admission_rule block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns">AdmissionWhitelistPatterns</a></code> | <code>object</code> | admission_whitelist_patterns block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.clusterAdmissionRules">ClusterAdmissionRules</a></code> | <code>object</code> | cluster_admission_rules block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.description">Description</a></code> | <code>string</code> | A descriptive comment. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode">GlobalPolicyEvaluationMode</a></code> | <code>string</code> | Controls the evaluation of a Google-maintained global admission policy for common system-level images. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#id BinaryAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#project BinaryAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultAdmissionRule`<sup>Required</sup> <a name="DefaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.defaultAdmissionRule"></a>

```csharp
public BinaryAuthorizationPolicyDefaultAdmissionRule DefaultAdmissionRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

default_admission_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#default_admission_rule BinaryAuthorizationPolicy#default_admission_rule}

---

##### `AdmissionWhitelistPatterns`<sup>Optional</sup> <a name="AdmissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns"></a>

```csharp
public object AdmissionWhitelistPatterns { get; set; }
```

- *Type:* object

admission_whitelist_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#admission_whitelist_patterns BinaryAuthorizationPolicy#admission_whitelist_patterns}

---

##### `ClusterAdmissionRules`<sup>Optional</sup> <a name="ClusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.clusterAdmissionRules"></a>

```csharp
public object ClusterAdmissionRules { get; set; }
```

- *Type:* object

cluster_admission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#cluster_admission_rules BinaryAuthorizationPolicy#cluster_admission_rules}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A descriptive comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#description BinaryAuthorizationPolicy#description}

---

##### `GlobalPolicyEvaluationMode`<sup>Optional</sup> <a name="GlobalPolicyEvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode"></a>

```csharp
public string GlobalPolicyEvaluationMode { get; set; }
```

- *Type:* string

Controls the evaluation of a Google-maintained global admission policy for common system-level images.

Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#global_policy_evaluation_mode BinaryAuthorizationPolicy#global_policy_evaluation_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#id BinaryAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#project BinaryAuthorizationPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.timeouts"></a>

```csharp
public BinaryAuthorizationPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#timeouts BinaryAuthorizationPolicy#timeouts}

---

### BinaryAuthorizationPolicyDefaultAdmissionRule <a name="BinaryAuthorizationPolicyDefaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationPolicyDefaultAdmissionRule {
    string EnforcementMode,
    string EvaluationMode,
    string[] RequireAttestationsBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode">EnforcementMode</a></code> | <code>string</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode">EvaluationMode</a></code> | <code>string</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy">RequireAttestationsBy</a></code> | <code>string[]</code> | The resource names of the attestors that must attest to a container image. |

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode"></a>

```csharp
public string EnforcementMode { get; set; }
```

- *Type:* string

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#enforcement_mode BinaryAuthorizationPolicy#enforcement_mode}

---

##### `EvaluationMode`<sup>Required</sup> <a name="EvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode"></a>

```csharp
public string EvaluationMode { get; set; }
```

- *Type:* string

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#evaluation_mode BinaryAuthorizationPolicy#evaluation_mode}

---

##### `RequireAttestationsBy`<sup>Optional</sup> <a name="RequireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy"></a>

```csharp
public string[] RequireAttestationsBy { get; set; }
```

- *Type:* string[]

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#require_attestations_by BinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### BinaryAuthorizationPolicyTimeouts <a name="BinaryAuthorizationPolicyTimeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#create BinaryAuthorizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#delete BinaryAuthorizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#update BinaryAuthorizationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#create BinaryAuthorizationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#delete BinaryAuthorizationPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/binary_authorization_policy#update BinaryAuthorizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BinaryAuthorizationPolicyAdmissionWhitelistPatternsList <a name="BinaryAuthorizationPolicyAdmissionWhitelistPatternsList" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationPolicyAdmissionWhitelistPatternsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get"></a>

```csharp
private BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference <a name="BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput">NamePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern">NamePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamePatternInput`<sup>Optional</sup> <a name="NamePatternInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput"></a>

```csharp
public string NamePatternInput { get; }
```

- *Type:* string

---

##### `NamePattern`<sup>Required</sup> <a name="NamePattern" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern"></a>

```csharp
public string NamePattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BinaryAuthorizationPolicyClusterAdmissionRulesList <a name="BinaryAuthorizationPolicyClusterAdmissionRulesList" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationPolicyClusterAdmissionRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.get"></a>

```csharp
private BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference <a name="BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy">ResetRequireAttestationsBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequireAttestationsBy` <a name="ResetRequireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy"></a>

```csharp
private void ResetRequireAttestationsBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput">EvaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput">RequireAttestationsByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode">EnforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode">EvaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy">RequireAttestationsBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput"></a>

```csharp
public string EnforcementModeInput { get; }
```

- *Type:* string

---

##### `EvaluationModeInput`<sup>Optional</sup> <a name="EvaluationModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput"></a>

```csharp
public string EvaluationModeInput { get; }
```

- *Type:* string

---

##### `RequireAttestationsByInput`<sup>Optional</sup> <a name="RequireAttestationsByInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput"></a>

```csharp
public string[] RequireAttestationsByInput { get; }
```

- *Type:* string[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode"></a>

```csharp
public string EnforcementMode { get; }
```

- *Type:* string

---

##### `EvaluationMode`<sup>Required</sup> <a name="EvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode"></a>

```csharp
public string EvaluationMode { get; }
```

- *Type:* string

---

##### `RequireAttestationsBy`<sup>Required</sup> <a name="RequireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy"></a>

```csharp
public string[] RequireAttestationsBy { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference <a name="BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy">ResetRequireAttestationsBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequireAttestationsBy` <a name="ResetRequireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy"></a>

```csharp
private void ResetRequireAttestationsBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput">EvaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput">RequireAttestationsByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode">EnforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode">EvaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy">RequireAttestationsBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput"></a>

```csharp
public string EnforcementModeInput { get; }
```

- *Type:* string

---

##### `EvaluationModeInput`<sup>Optional</sup> <a name="EvaluationModeInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput"></a>

```csharp
public string EvaluationModeInput { get; }
```

- *Type:* string

---

##### `RequireAttestationsByInput`<sup>Optional</sup> <a name="RequireAttestationsByInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput"></a>

```csharp
public string[] RequireAttestationsByInput { get; }
```

- *Type:* string[]

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode"></a>

```csharp
public string EnforcementMode { get; }
```

- *Type:* string

---

##### `EvaluationMode`<sup>Required</sup> <a name="EvaluationMode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode"></a>

```csharp
public string EvaluationMode { get; }
```

- *Type:* string

---

##### `RequireAttestationsBy`<sup>Required</sup> <a name="RequireAttestationsBy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy"></a>

```csharp
public string[] RequireAttestationsBy { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue"></a>

```csharp
public BinaryAuthorizationPolicyDefaultAdmissionRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

---


### BinaryAuthorizationPolicyTimeoutsOutputReference <a name="BinaryAuthorizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BinaryAuthorizationPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



