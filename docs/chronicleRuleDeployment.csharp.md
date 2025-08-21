# `chronicleRuleDeployment` Submodule <a name="`chronicleRuleDeployment` Submodule" id="@cdktf/provider-google.chronicleRuleDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleRuleDeployment <a name="ChronicleRuleDeployment" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment google_chronicle_rule_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleRuleDeployment(Construct Scope, string Id, ChronicleRuleDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig">ChronicleRuleDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig">ChronicleRuleDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetAlerting">ResetAlerting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetArchived">ResetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetRunFrequency">ResetRunFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(ChronicleRuleDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a>

---

##### `ResetAlerting` <a name="ResetAlerting" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetAlerting"></a>

```csharp
private void ResetAlerting()
```

##### `ResetArchived` <a name="ResetArchived" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetArchived"></a>

```csharp
private void ResetArchived()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRunFrequency` <a name="ResetRunFrequency" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetRunFrequency"></a>

```csharp
private void ResetRunFrequency()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChronicleRuleDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleRuleDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleRuleDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleRuleDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ChronicleRuleDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ChronicleRuleDeployment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleRuleDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleRuleDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleRuleDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archiveTime">ArchiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.consumerRules">ConsumerRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.executionState">ExecutionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.lastAlertStatusChangeTime">LastAlertStatusChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.producerRules">ProducerRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference">ChronicleRuleDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.alertingInput">AlertingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archivedInput">ArchivedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.ruleInput">RuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.runFrequencyInput">RunFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.alerting">Alerting</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archived">Archived</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.rule">Rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.runFrequency">RunFrequency</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ArchiveTime`<sup>Required</sup> <a name="ArchiveTime" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archiveTime"></a>

```csharp
public string ArchiveTime { get; }
```

- *Type:* string

---

##### `ConsumerRules`<sup>Required</sup> <a name="ConsumerRules" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.consumerRules"></a>

```csharp
public string[] ConsumerRules { get; }
```

- *Type:* string[]

---

##### `ExecutionState`<sup>Required</sup> <a name="ExecutionState" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.executionState"></a>

```csharp
public string ExecutionState { get; }
```

- *Type:* string

---

##### `LastAlertStatusChangeTime`<sup>Required</sup> <a name="LastAlertStatusChangeTime" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.lastAlertStatusChangeTime"></a>

```csharp
public string LastAlertStatusChangeTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProducerRules`<sup>Required</sup> <a name="ProducerRules" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.producerRules"></a>

```csharp
public string[] ProducerRules { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.timeouts"></a>

```csharp
public ChronicleRuleDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference">ChronicleRuleDeploymentTimeoutsOutputReference</a>

---

##### `AlertingInput`<sup>Optional</sup> <a name="AlertingInput" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.alertingInput"></a>

```csharp
public object AlertingInput { get; }
```

- *Type:* object

---

##### `ArchivedInput`<sup>Optional</sup> <a name="ArchivedInput" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archivedInput"></a>

```csharp
public object ArchivedInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.ruleInput"></a>

```csharp
public string RuleInput { get; }
```

- *Type:* string

---

##### `RunFrequencyInput`<sup>Optional</sup> <a name="RunFrequencyInput" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.runFrequencyInput"></a>

```csharp
public string RunFrequencyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Alerting`<sup>Required</sup> <a name="Alerting" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.alerting"></a>

```csharp
public object Alerting { get; }
```

- *Type:* object

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.archived"></a>

```csharp
public object Archived { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.rule"></a>

```csharp
public string Rule { get; }
```

- *Type:* string

---

##### `RunFrequency`<sup>Required</sup> <a name="RunFrequency" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.runFrequency"></a>

```csharp
public string RunFrequency { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleRuleDeploymentConfig <a name="ChronicleRuleDeploymentConfig" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleRuleDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Instance,
    string Location,
    string Rule,
    object Alerting = null,
    object Archived = null,
    object Enabled = null,
    string Id = null,
    string Project = null,
    string RunFrequency = null,
    ChronicleRuleDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.instance">Instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.rule">Rule</a></code> | <code>string</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.alerting">Alerting</a></code> | <code>object</code> | Whether detections resulting from this deployment should be considered alerts. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.archived">Archived</a></code> | <code>object</code> | The archive state of the rule deployment. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether the rule is currently deployed continuously against incoming data. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#id ChronicleRuleDeployment#id}. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#project ChronicleRuleDeployment#project}. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.runFrequency">RunFrequency</a></code> | <code>string</code> | The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#instance ChronicleRuleDeployment#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#location ChronicleRuleDeployment#location}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.rule"></a>

```csharp
public string Rule { get; set; }
```

- *Type:* string

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#rule ChronicleRuleDeployment#rule}

---

##### `Alerting`<sup>Optional</sup> <a name="Alerting" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.alerting"></a>

```csharp
public object Alerting { get; set; }
```

- *Type:* object

Whether detections resulting from this deployment should be considered alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#alerting ChronicleRuleDeployment#alerting}

---

##### `Archived`<sup>Optional</sup> <a name="Archived" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.archived"></a>

```csharp
public object Archived { get; set; }
```

- *Type:* object

The archive state of the rule deployment.

Cannot be set to true unless enabled is set to false i.e.
archiving requires a two-step process: first, disable the rule by
setting 'enabled' to false, then set 'archive' to true.
If set to true, alerting will automatically be set to false.
If currently set to true, enabled, alerting, and run_frequency cannot be
updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#archived ChronicleRuleDeployment#archived}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether the rule is currently deployed continuously against incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#enabled ChronicleRuleDeployment#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#id ChronicleRuleDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#project ChronicleRuleDeployment#project}.

---

##### `RunFrequency`<sup>Optional</sup> <a name="RunFrequency" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.runFrequency"></a>

```csharp
public string RunFrequency { get; set; }
```

- *Type:* string

The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#run_frequency ChronicleRuleDeployment#run_frequency}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentConfig.property.timeouts"></a>

```csharp
public ChronicleRuleDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts">ChronicleRuleDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#timeouts ChronicleRuleDeployment#timeouts}

---

### ChronicleRuleDeploymentTimeouts <a name="ChronicleRuleDeploymentTimeouts" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleRuleDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#create ChronicleRuleDeployment#create}. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#delete ChronicleRuleDeployment#delete}. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#update ChronicleRuleDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#create ChronicleRuleDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#delete ChronicleRuleDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/chronicle_rule_deployment#update ChronicleRuleDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleRuleDeploymentTimeoutsOutputReference <a name="ChronicleRuleDeploymentTimeoutsOutputReference" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ChronicleRuleDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleRuleDeployment.ChronicleRuleDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



