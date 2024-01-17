# `billingBudget` Submodule <a name="`billingBudget` Submodule" id="@cdktf/provider-google.billingBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingBudget <a name="BillingBudget" id="@cdktf/provider-google.billingBudget.BillingBudget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget google_billing_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudget(Construct Scope, string Id, BillingBudgetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig">BillingBudgetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig">BillingBudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule">PutAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putAmount">PutAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter">PutBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules">PutThresholdRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetAllUpdatesRule">ResetAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetBudgetFilter">ResetBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetThresholdRules">ResetThresholdRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.billingBudget.BillingBudget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.billingBudget.BillingBudget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.billingBudget.BillingBudget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.billingBudget.BillingBudget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.billingBudget.BillingBudget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.billingBudget.BillingBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.billingBudget.BillingBudget.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.billingBudget.BillingBudget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.billingBudget.BillingBudget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.billingBudget.BillingBudget.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.billingBudget.BillingBudget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.billingBudget.BillingBudget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.billingBudget.BillingBudget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.billingBudget.BillingBudget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.billingBudget.BillingBudget.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.billingBudget.BillingBudget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.billingBudget.BillingBudget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllUpdatesRule` <a name="PutAllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule"></a>

```csharp
private void PutAllUpdatesRule(BillingBudgetAllUpdatesRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---

##### `PutAmount` <a name="PutAmount" id="@cdktf/provider-google.billingBudget.BillingBudget.putAmount"></a>

```csharp
private void PutAmount(BillingBudgetAmount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.billingBudget.BillingBudget.putAmount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---

##### `PutBudgetFilter` <a name="PutBudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter"></a>

```csharp
private void PutBudgetFilter(BillingBudgetBudgetFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---

##### `PutThresholdRules` <a name="PutThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules"></a>

```csharp
private void PutThresholdRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts"></a>

```csharp
private void PutTimeouts(BillingBudgetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

---

##### `ResetAllUpdatesRule` <a name="ResetAllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudget.resetAllUpdatesRule"></a>

```csharp
private void ResetAllUpdatesRule()
```

##### `ResetBudgetFilter` <a name="ResetBudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudget.resetBudgetFilter"></a>

```csharp
private void ResetBudgetFilter()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.billingBudget.BillingBudget.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.billingBudget.BillingBudget.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetThresholdRules` <a name="ResetThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudget.resetThresholdRules"></a>

```csharp
private void ResetThresholdRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BillingBudget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.billingBudget.BillingBudget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BillingBudget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.billingBudget.BillingBudget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BillingBudget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BillingBudget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BillingBudget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BillingBudget resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BillingBudget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BillingBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BillingBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRule">AllUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference">BillingBudgetAllUpdatesRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.amount">Amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference">BillingBudgetAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilter">BudgetFilter</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference">BillingBudgetBudgetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRules">ThresholdRules</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList">BillingBudgetThresholdRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference">BillingBudgetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRuleInput">AllUpdatesRuleInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.amountInput">AmountInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccountInput">BillingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilterInput">BudgetFilterInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRulesInput">ThresholdRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccount">BillingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.billingBudget.BillingBudget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.billingBudget.BillingBudget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.billingBudget.BillingBudget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.billingBudget.BillingBudget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.billingBudget.BillingBudget.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.billingBudget.BillingBudget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.billingBudget.BillingBudget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.billingBudget.BillingBudget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.billingBudget.BillingBudget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.billingBudget.BillingBudget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllUpdatesRule`<sup>Required</sup> <a name="AllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRule"></a>

```csharp
public BillingBudgetAllUpdatesRuleOutputReference AllUpdatesRule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference">BillingBudgetAllUpdatesRuleOutputReference</a>

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-google.billingBudget.BillingBudget.property.amount"></a>

```csharp
public BillingBudgetAmountOutputReference Amount { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference">BillingBudgetAmountOutputReference</a>

---

##### `BudgetFilter`<sup>Required</sup> <a name="BudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilter"></a>

```csharp
public BillingBudgetBudgetFilterOutputReference BudgetFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference">BillingBudgetBudgetFilterOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.billingBudget.BillingBudget.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ThresholdRules`<sup>Required</sup> <a name="ThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRules"></a>

```csharp
public BillingBudgetThresholdRulesList ThresholdRules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList">BillingBudgetThresholdRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.property.timeouts"></a>

```csharp
public BillingBudgetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference">BillingBudgetTimeoutsOutputReference</a>

---

##### `AllUpdatesRuleInput`<sup>Optional</sup> <a name="AllUpdatesRuleInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRuleInput"></a>

```csharp
public BillingBudgetAllUpdatesRule AllUpdatesRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.amountInput"></a>

```csharp
public BillingBudgetAmount AmountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---

##### `BillingAccountInput`<sup>Optional</sup> <a name="BillingAccountInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccountInput"></a>

```csharp
public string BillingAccountInput { get; }
```

- *Type:* string

---

##### `BudgetFilterInput`<sup>Optional</sup> <a name="BudgetFilterInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilterInput"></a>

```csharp
public BillingBudgetBudgetFilter BudgetFilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ThresholdRulesInput`<sup>Optional</sup> <a name="ThresholdRulesInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRulesInput"></a>

```csharp
public object ThresholdRulesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccount"></a>

```csharp
public string BillingAccount { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.billingBudget.BillingBudget.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.billingBudget.BillingBudget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.billingBudget.BillingBudget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingBudgetAllUpdatesRule <a name="BillingBudgetAllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetAllUpdatesRule {
    object DisableDefaultIamRecipients = null,
    string[] MonitoringNotificationChannels = null,
    string PubsubTopic = null,
    string SchemaVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients">DisableDefaultIamRecipients</a></code> | <code>object</code> | Boolean. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.monitoringNotificationChannels">MonitoringNotificationChannels</a></code> | <code>string[]</code> | The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.schemaVersion">SchemaVersion</a></code> | <code>string</code> | The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format. |

---

##### `DisableDefaultIamRecipients`<sup>Optional</sup> <a name="DisableDefaultIamRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients"></a>

```csharp
public object DisableDefaultIamRecipients { get; set; }
```

- *Type:* object

Boolean.

When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#disable_default_iam_recipients BillingBudget#disable_default_iam_recipients}

---

##### `MonitoringNotificationChannels`<sup>Optional</sup> <a name="MonitoringNotificationChannels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.monitoringNotificationChannels"></a>

```csharp
public string[] MonitoringNotificationChannels { get; set; }
```

- *Type:* string[]

The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#monitoring_notification_channels BillingBudget#monitoring_notification_channels}

---

##### `PubsubTopic`<sup>Optional</sup> <a name="PubsubTopic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; set; }
```

- *Type:* string

The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}.

Updates are sent
at regular intervals to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#pubsub_topic BillingBudget#pubsub_topic}

---

##### `SchemaVersion`<sup>Optional</sup> <a name="SchemaVersion" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.schemaVersion"></a>

```csharp
public string SchemaVersion { get; set; }
```

- *Type:* string

The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#schema_version BillingBudget#schema_version}

---

### BillingBudgetAmount <a name="BillingBudgetAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetAmount {
    object LastPeriodAmount = null,
    BillingBudgetAmountSpecifiedAmount SpecifiedAmount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.lastPeriodAmount">LastPeriodAmount</a></code> | <code>object</code> | Configures a budget amount that is automatically set to 100% of last period's spend. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.specifiedAmount">SpecifiedAmount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | specified_amount block. |

---

##### `LastPeriodAmount`<sup>Optional</sup> <a name="LastPeriodAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.lastPeriodAmount"></a>

```csharp
public object LastPeriodAmount { get; set; }
```

- *Type:* object

Configures a budget amount that is automatically set to 100% of last period's spend.

Boolean. Set value to true to use. Do not set to false, instead
use the 'specified_amount' block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#last_period_amount BillingBudget#last_period_amount}

---

##### `SpecifiedAmount`<sup>Optional</sup> <a name="SpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.specifiedAmount"></a>

```csharp
public BillingBudgetAmountSpecifiedAmount SpecifiedAmount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

specified_amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#specified_amount BillingBudget#specified_amount}

---

### BillingBudgetAmountSpecifiedAmount <a name="BillingBudgetAmountSpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetAmountSpecifiedAmount {
    string CurrencyCode = null,
    double Nanos = null,
    string Units = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | The 3-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.nanos">Nanos</a></code> | <code>double</code> | Number of nano (10^-9) units of the amount. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.units">Units</a></code> | <code>string</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `CurrencyCode`<sup>Optional</sup> <a name="CurrencyCode" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; set; }
```

- *Type:* string

The 3-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#currency_code BillingBudget#currency_code}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Number of nano (10^-9) units of the amount.

The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#nanos BillingBudget#nanos}

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.units"></a>

```csharp
public string Units { get; set; }
```

- *Type:* string

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#units BillingBudget#units}

---

### BillingBudgetBudgetFilter <a name="BillingBudgetBudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetBudgetFilter {
    string CalendarPeriod = null,
    string[] CreditTypes = null,
    string CreditTypesTreatment = null,
    BillingBudgetBudgetFilterCustomPeriod CustomPeriod = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string[] Projects = null,
    string[] ResourceAncestors = null,
    string[] Services = null,
    string[] Subaccounts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.calendarPeriod">CalendarPeriod</a></code> | <code>string</code> | A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypes">CreditTypes</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypesTreatment">CreditTypesTreatment</a></code> | <code>string</code> | Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"]. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.customPeriod">CustomPeriod</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | custom_period block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.projects">Projects</a></code> | <code>string[]</code> | A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.resourceAncestors">ResourceAncestors</a></code> | <code>string[]</code> | A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.services">Services</a></code> | <code>string[]</code> | A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.subaccounts">Subaccounts</a></code> | <code>string[]</code> | A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget. |

---

##### `CalendarPeriod`<sup>Optional</sup> <a name="CalendarPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.calendarPeriod"></a>

```csharp
public string CalendarPeriod { get; set; }
```

- *Type:* string

A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start.

Grammatically, "the start of the current CalendarPeriod".
All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).

Exactly one of 'calendar_period', 'custom_period' must be provided. Possible values: ["MONTH", "QUARTER", "YEAR", "CALENDAR_PERIOD_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#calendar_period BillingBudget#calendar_period}

---

##### `CreditTypes`<sup>Optional</sup> <a name="CreditTypes" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypes"></a>

```csharp
public string[] CreditTypes { get; set; }
```

- *Type:* string[]

Optional.

If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,
this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.
If creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#credit_types BillingBudget#credit_types}

---

##### `CreditTypesTreatment`<sup>Optional</sup> <a name="CreditTypesTreatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypesTreatment"></a>

```csharp
public string CreditTypesTreatment { get; set; }
```

- *Type:* string

Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#credit_types_treatment BillingBudget#credit_types_treatment}

---

##### `CustomPeriod`<sup>Optional</sup> <a name="CustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.customPeriod"></a>

```csharp
public BillingBudgetBudgetFilterCustomPeriod CustomPeriod { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

custom_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#custom_period BillingBudget#custom_period}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#labels BillingBudget#labels}

---

##### `Projects`<sup>Optional</sup> <a name="Projects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.projects"></a>

```csharp
public string[] Projects { get; set; }
```

- *Type:* string[]

A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget.

If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#projects BillingBudget#projects}

---

##### `ResourceAncestors`<sup>Optional</sup> <a name="ResourceAncestors" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.resourceAncestors"></a>

```csharp
public string[] ResourceAncestors { get; set; }
```

- *Type:* string[]

A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget.

If omitted, the budget includes all usage that the billing account pays for. If the folder or organization
contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#resource_ancestors BillingBudget#resource_ancestors}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.services"></a>

```csharp
public string[] Services { get; set; }
```

- *Type:* string[]

A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget.

If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#services BillingBudget#services}

---

##### `Subaccounts`<sup>Optional</sup> <a name="Subaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.subaccounts"></a>

```csharp
public string[] Subaccounts { get; set; }
```

- *Type:* string[]

A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget.

If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#subaccounts BillingBudget#subaccounts}

---

### BillingBudgetBudgetFilterCustomPeriod <a name="BillingBudgetBudgetFilterCustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetBudgetFilterCustomPeriod {
    BillingBudgetBudgetFilterCustomPeriodStartDate StartDate,
    BillingBudgetBudgetFilterCustomPeriodEndDate EndDate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | end_date block. |

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.startDate"></a>

```csharp
public BillingBudgetBudgetFilterCustomPeriodStartDate StartDate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#start_date BillingBudget#start_date}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.endDate"></a>

```csharp
public BillingBudgetBudgetFilterCustomPeriodEndDate EndDate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#end_date BillingBudget#end_date}

---

### BillingBudgetBudgetFilterCustomPeriodEndDate <a name="BillingBudgetBudgetFilterCustomPeriodEndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetBudgetFilterCustomPeriodEndDate {
    double Day,
    double Month,
    double Year
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.day">Day</a></code> | <code>double</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.month">Month</a></code> | <code>double</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.year">Year</a></code> | <code>double</code> | Year of the date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#day BillingBudget#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#month BillingBudget#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#year BillingBudget#year}

---

### BillingBudgetBudgetFilterCustomPeriodStartDate <a name="BillingBudgetBudgetFilterCustomPeriodStartDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetBudgetFilterCustomPeriodStartDate {
    double Day,
    double Month,
    double Year
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.day">Day</a></code> | <code>double</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.month">Month</a></code> | <code>double</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.year">Year</a></code> | <code>double</code> | Year of the date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#day BillingBudget#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#month BillingBudget#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#year BillingBudget#year}

---

### BillingBudgetConfig <a name="BillingBudgetConfig" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    BillingBudgetAmount Amount,
    string BillingAccount,
    BillingBudgetAllUpdatesRule AllUpdatesRule = null,
    BillingBudgetBudgetFilter BudgetFilter = null,
    string DisplayName = null,
    string Id = null,
    object ThresholdRules = null,
    BillingBudgetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.amount">Amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | amount block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.billingAccount">BillingAccount</a></code> | <code>string</code> | ID of the billing account to set a budget on. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.allUpdatesRule">AllUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | all_updates_rule block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.budgetFilter">BudgetFilter</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | budget_filter block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User data for display name in UI. Must be <= 60 chars. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#id BillingBudget#id}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.thresholdRules">ThresholdRules</a></code> | <code>object</code> | threshold_rules block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.amount"></a>

```csharp
public BillingBudgetAmount Amount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#amount BillingBudget#amount}

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.billingAccount"></a>

```csharp
public string BillingAccount { get; set; }
```

- *Type:* string

ID of the billing account to set a budget on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#billing_account BillingBudget#billing_account}

---

##### `AllUpdatesRule`<sup>Optional</sup> <a name="AllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.allUpdatesRule"></a>

```csharp
public BillingBudgetAllUpdatesRule AllUpdatesRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

all_updates_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#all_updates_rule BillingBudget#all_updates_rule}

---

##### `BudgetFilter`<sup>Optional</sup> <a name="BudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.budgetFilter"></a>

```csharp
public BillingBudgetBudgetFilter BudgetFilter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

budget_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#budget_filter BillingBudget#budget_filter}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User data for display name in UI. Must be <= 60 chars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#display_name BillingBudget#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#id BillingBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ThresholdRules`<sup>Optional</sup> <a name="ThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.thresholdRules"></a>

```csharp
public object ThresholdRules { get; set; }
```

- *Type:* object

threshold_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#threshold_rules BillingBudget#threshold_rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.timeouts"></a>

```csharp
public BillingBudgetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#timeouts BillingBudget#timeouts}

---

### BillingBudgetThresholdRules <a name="BillingBudgetThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetThresholdRules {
    double ThresholdPercent,
    string SpendBasis = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.thresholdPercent">ThresholdPercent</a></code> | <code>double</code> | Send an alert when this threshold is exceeded. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.spendBasis">SpendBasis</a></code> | <code>string</code> | The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"]. |

---

##### `ThresholdPercent`<sup>Required</sup> <a name="ThresholdPercent" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.thresholdPercent"></a>

```csharp
public double ThresholdPercent { get; set; }
```

- *Type:* double

Send an alert when this threshold is exceeded.

This is a
1.0-based percentage, so 0.5 = 50%. Must be >= 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#threshold_percent BillingBudget#threshold_percent}

---

##### `SpendBasis`<sup>Optional</sup> <a name="SpendBasis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.spendBasis"></a>

```csharp
public string SpendBasis { get; set; }
```

- *Type:* string

The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#spend_basis BillingBudget#spend_basis}

---

### BillingBudgetTimeouts <a name="BillingBudgetTimeouts" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#create BillingBudget#create}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#delete BillingBudget#delete}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#update BillingBudget#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#create BillingBudget#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#delete BillingBudget#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/billing_budget#update BillingBudget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingBudgetAllUpdatesRuleOutputReference <a name="BillingBudgetAllUpdatesRuleOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetAllUpdatesRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients">ResetDisableDefaultIamRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels">ResetMonitoringNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic">ResetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion">ResetSchemaVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableDefaultIamRecipients` <a name="ResetDisableDefaultIamRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients"></a>

```csharp
private void ResetDisableDefaultIamRecipients()
```

##### `ResetMonitoringNotificationChannels` <a name="ResetMonitoringNotificationChannels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels"></a>

```csharp
private void ResetMonitoringNotificationChannels()
```

##### `ResetPubsubTopic` <a name="ResetPubsubTopic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic"></a>

```csharp
private void ResetPubsubTopic()
```

##### `ResetSchemaVersion` <a name="ResetSchemaVersion" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion"></a>

```csharp
private void ResetSchemaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput">DisableDefaultIamRecipientsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput">MonitoringNotificationChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput">SchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients">DisableDefaultIamRecipients</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels">MonitoringNotificationChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion">SchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableDefaultIamRecipientsInput`<sup>Optional</sup> <a name="DisableDefaultIamRecipientsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput"></a>

```csharp
public object DisableDefaultIamRecipientsInput { get; }
```

- *Type:* object

---

##### `MonitoringNotificationChannelsInput`<sup>Optional</sup> <a name="MonitoringNotificationChannelsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput"></a>

```csharp
public string[] MonitoringNotificationChannelsInput { get; }
```

- *Type:* string[]

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput"></a>

```csharp
public string PubsubTopicInput { get; }
```

- *Type:* string

---

##### `SchemaVersionInput`<sup>Optional</sup> <a name="SchemaVersionInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput"></a>

```csharp
public string SchemaVersionInput { get; }
```

- *Type:* string

---

##### `DisableDefaultIamRecipients`<sup>Required</sup> <a name="DisableDefaultIamRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients"></a>

```csharp
public object DisableDefaultIamRecipients { get; }
```

- *Type:* object

---

##### `MonitoringNotificationChannels`<sup>Required</sup> <a name="MonitoringNotificationChannels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels"></a>

```csharp
public string[] MonitoringNotificationChannels { get; }
```

- *Type:* string[]

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; }
```

- *Type:* string

---

##### `SchemaVersion`<sup>Required</sup> <a name="SchemaVersion" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion"></a>

```csharp
public string SchemaVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.internalValue"></a>

```csharp
public BillingBudgetAllUpdatesRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---


### BillingBudgetAmountOutputReference <a name="BillingBudgetAmountOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetAmountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount">PutSpecifiedAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetLastPeriodAmount">ResetLastPeriodAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetSpecifiedAmount">ResetSpecifiedAmount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpecifiedAmount` <a name="PutSpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount"></a>

```csharp
private void PutSpecifiedAmount(BillingBudgetAmountSpecifiedAmount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---

##### `ResetLastPeriodAmount` <a name="ResetLastPeriodAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetLastPeriodAmount"></a>

```csharp
private void ResetLastPeriodAmount()
```

##### `ResetSpecifiedAmount` <a name="ResetSpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetSpecifiedAmount"></a>

```csharp
private void ResetSpecifiedAmount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmount">SpecifiedAmount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference">BillingBudgetAmountSpecifiedAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmountInput">LastPeriodAmountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmountInput">SpecifiedAmountInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmount">LastPeriodAmount</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpecifiedAmount`<sup>Required</sup> <a name="SpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmount"></a>

```csharp
public BillingBudgetAmountSpecifiedAmountOutputReference SpecifiedAmount { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference">BillingBudgetAmountSpecifiedAmountOutputReference</a>

---

##### `LastPeriodAmountInput`<sup>Optional</sup> <a name="LastPeriodAmountInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmountInput"></a>

```csharp
public object LastPeriodAmountInput { get; }
```

- *Type:* object

---

##### `SpecifiedAmountInput`<sup>Optional</sup> <a name="SpecifiedAmountInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmountInput"></a>

```csharp
public BillingBudgetAmountSpecifiedAmount SpecifiedAmountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---

##### `LastPeriodAmount`<sup>Required</sup> <a name="LastPeriodAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmount"></a>

```csharp
public object LastPeriodAmount { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.internalValue"></a>

```csharp
public BillingBudgetAmount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---


### BillingBudgetAmountSpecifiedAmountOutputReference <a name="BillingBudgetAmountSpecifiedAmountOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetAmountSpecifiedAmountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode">ResetCurrencyCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurrencyCode` <a name="ResetCurrencyCode" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode"></a>

```csharp
private void ResetCurrencyCode()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetUnits` <a name="ResetUnits" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetUnits"></a>

```csharp
private void ResetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput">CurrencyCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput">UnitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.units">Units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrencyCodeInput`<sup>Optional</sup> <a name="CurrencyCodeInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput"></a>

```csharp
public string CurrencyCodeInput { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput"></a>

```csharp
public string UnitsInput { get; }
```

- *Type:* string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.units"></a>

```csharp
public string Units { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue"></a>

```csharp
public BillingBudgetAmountSpecifiedAmount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---


### BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue"></a>

```csharp
public BillingBudgetBudgetFilterCustomPeriodEndDate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---


### BillingBudgetBudgetFilterCustomPeriodOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetBudgetFilterCustomPeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate">PutEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate">PutStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate">ResetEndDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndDate` <a name="PutEndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate"></a>

```csharp
private void PutEndDate(BillingBudgetBudgetFilterCustomPeriodEndDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `PutStartDate` <a name="PutStartDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate"></a>

```csharp
private void PutStartDate(BillingBudgetBudgetFilterCustomPeriodStartDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate"></a>

```csharp
private void ResetEndDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput">EndDateInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput">StartDateInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate"></a>

```csharp
public BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference EndDate { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a>

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate"></a>

```csharp
public BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference StartDate { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a>

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput"></a>

```csharp
public BillingBudgetBudgetFilterCustomPeriodEndDate EndDateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput"></a>

```csharp
public BillingBudgetBudgetFilterCustomPeriodStartDate StartDateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue"></a>

```csharp
public BillingBudgetBudgetFilterCustomPeriod InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---


### BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue"></a>

```csharp
public BillingBudgetBudgetFilterCustomPeriodStartDate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---


### BillingBudgetBudgetFilterOutputReference <a name="BillingBudgetBudgetFilterOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetBudgetFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod">PutCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCalendarPeriod">ResetCalendarPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypes">ResetCreditTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment">ResetCreditTypesTreatment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCustomPeriod">ResetCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetProjects">ResetProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetResourceAncestors">ResetResourceAncestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetServices">ResetServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetSubaccounts">ResetSubaccounts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPeriod` <a name="PutCustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod"></a>

```csharp
private void PutCustomPeriod(BillingBudgetBudgetFilterCustomPeriod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---

##### `ResetCalendarPeriod` <a name="ResetCalendarPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCalendarPeriod"></a>

```csharp
private void ResetCalendarPeriod()
```

##### `ResetCreditTypes` <a name="ResetCreditTypes" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypes"></a>

```csharp
private void ResetCreditTypes()
```

##### `ResetCreditTypesTreatment` <a name="ResetCreditTypesTreatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment"></a>

```csharp
private void ResetCreditTypesTreatment()
```

##### `ResetCustomPeriod` <a name="ResetCustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCustomPeriod"></a>

```csharp
private void ResetCustomPeriod()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProjects` <a name="ResetProjects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetProjects"></a>

```csharp
private void ResetProjects()
```

##### `ResetResourceAncestors` <a name="ResetResourceAncestors" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetResourceAncestors"></a>

```csharp
private void ResetResourceAncestors()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetServices"></a>

```csharp
private void ResetServices()
```

##### `ResetSubaccounts` <a name="ResetSubaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetSubaccounts"></a>

```csharp
private void ResetSubaccounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriod">CustomPeriod</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference">BillingBudgetBudgetFilterCustomPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput">CalendarPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesInput">CreditTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput">CreditTypesTreatmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriodInput">CustomPeriodInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projectsInput">ProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput">ResourceAncestorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.servicesInput">ServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccountsInput">SubaccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriod">CalendarPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypes">CreditTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment">CreditTypesTreatment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projects">Projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestors">ResourceAncestors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.services">Services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccounts">Subaccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomPeriod`<sup>Required</sup> <a name="CustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriod"></a>

```csharp
public BillingBudgetBudgetFilterCustomPeriodOutputReference CustomPeriod { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference">BillingBudgetBudgetFilterCustomPeriodOutputReference</a>

---

##### `CalendarPeriodInput`<sup>Optional</sup> <a name="CalendarPeriodInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput"></a>

```csharp
public string CalendarPeriodInput { get; }
```

- *Type:* string

---

##### `CreditTypesInput`<sup>Optional</sup> <a name="CreditTypesInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesInput"></a>

```csharp
public string[] CreditTypesInput { get; }
```

- *Type:* string[]

---

##### `CreditTypesTreatmentInput`<sup>Optional</sup> <a name="CreditTypesTreatmentInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput"></a>

```csharp
public string CreditTypesTreatmentInput { get; }
```

- *Type:* string

---

##### `CustomPeriodInput`<sup>Optional</sup> <a name="CustomPeriodInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriodInput"></a>

```csharp
public BillingBudgetBudgetFilterCustomPeriod CustomPeriodInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectsInput`<sup>Optional</sup> <a name="ProjectsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projectsInput"></a>

```csharp
public string[] ProjectsInput { get; }
```

- *Type:* string[]

---

##### `ResourceAncestorsInput`<sup>Optional</sup> <a name="ResourceAncestorsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput"></a>

```csharp
public string[] ResourceAncestorsInput { get; }
```

- *Type:* string[]

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.servicesInput"></a>

```csharp
public string[] ServicesInput { get; }
```

- *Type:* string[]

---

##### `SubaccountsInput`<sup>Optional</sup> <a name="SubaccountsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccountsInput"></a>

```csharp
public string[] SubaccountsInput { get; }
```

- *Type:* string[]

---

##### `CalendarPeriod`<sup>Required</sup> <a name="CalendarPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriod"></a>

```csharp
public string CalendarPeriod { get; }
```

- *Type:* string

---

##### `CreditTypes`<sup>Required</sup> <a name="CreditTypes" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypes"></a>

```csharp
public string[] CreditTypes { get; }
```

- *Type:* string[]

---

##### `CreditTypesTreatment`<sup>Required</sup> <a name="CreditTypesTreatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment"></a>

```csharp
public string CreditTypesTreatment { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projects"></a>

```csharp
public string[] Projects { get; }
```

- *Type:* string[]

---

##### `ResourceAncestors`<sup>Required</sup> <a name="ResourceAncestors" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestors"></a>

```csharp
public string[] ResourceAncestors { get; }
```

- *Type:* string[]

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.services"></a>

```csharp
public string[] Services { get; }
```

- *Type:* string[]

---

##### `Subaccounts`<sup>Required</sup> <a name="Subaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccounts"></a>

```csharp
public string[] Subaccounts { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.internalValue"></a>

```csharp
public BillingBudgetBudgetFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---


### BillingBudgetThresholdRulesList <a name="BillingBudgetThresholdRulesList" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetThresholdRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get"></a>

```csharp
private BillingBudgetThresholdRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BillingBudgetThresholdRulesOutputReference <a name="BillingBudgetThresholdRulesOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetThresholdRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resetSpendBasis">ResetSpendBasis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSpendBasis` <a name="ResetSpendBasis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resetSpendBasis"></a>

```csharp
private void ResetSpendBasis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasisInput">SpendBasisInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput">ThresholdPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasis">SpendBasis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercent">ThresholdPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpendBasisInput`<sup>Optional</sup> <a name="SpendBasisInput" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasisInput"></a>

```csharp
public string SpendBasisInput { get; }
```

- *Type:* string

---

##### `ThresholdPercentInput`<sup>Optional</sup> <a name="ThresholdPercentInput" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput"></a>

```csharp
public double ThresholdPercentInput { get; }
```

- *Type:* double

---

##### `SpendBasis`<sup>Required</sup> <a name="SpendBasis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasis"></a>

```csharp
public string SpendBasis { get; }
```

- *Type:* string

---

##### `ThresholdPercent`<sup>Required</sup> <a name="ThresholdPercent" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercent"></a>

```csharp
public double ThresholdPercent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BillingBudgetTimeoutsOutputReference <a name="BillingBudgetTimeoutsOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BillingBudgetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



