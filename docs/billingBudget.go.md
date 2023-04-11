# `billingBudget` Submodule <a name="`billingBudget` Submodule" id="@cdktf/provider-google.billingBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingBudget <a name="BillingBudget" id="@cdktf/provider-google.billingBudget.BillingBudget"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/billing_budget google_billing_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.NewBillingBudget(scope Construct, id *string, config BillingBudgetConfig) BillingBudget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig">BillingBudgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig">BillingBudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.billingBudget.BillingBudget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.billingBudget.BillingBudget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.billingBudget.BillingBudget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAllUpdatesRule` <a name="PutAllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule"></a>

```go
func PutAllUpdatesRule(value BillingBudgetAllUpdatesRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---

##### `PutAmount` <a name="PutAmount" id="@cdktf/provider-google.billingBudget.BillingBudget.putAmount"></a>

```go
func PutAmount(value BillingBudgetAmount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putAmount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---

##### `PutBudgetFilter` <a name="PutBudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter"></a>

```go
func PutBudgetFilter(value BillingBudgetBudgetFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---

##### `PutThresholdRules` <a name="PutThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules"></a>

```go
func PutThresholdRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts"></a>

```go
func PutTimeouts(value BillingBudgetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

---

##### `ResetAllUpdatesRule` <a name="ResetAllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudget.resetAllUpdatesRule"></a>

```go
func ResetAllUpdatesRule()
```

##### `ResetBudgetFilter` <a name="ResetBudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudget.resetBudgetFilter"></a>

```go
func ResetBudgetFilter()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.billingBudget.BillingBudget.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.billingBudget.BillingBudget.resetId"></a>

```go
func ResetId()
```

##### `ResetThresholdRules` <a name="ResetThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudget.resetThresholdRules"></a>

```go
func ResetThresholdRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.billingBudget.BillingBudget.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.BillingBudget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.billingBudget.BillingBudget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.BillingBudget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.BillingBudget_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRule">AllUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference">BillingBudgetAllUpdatesRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.amount">Amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference">BillingBudgetAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilter">BudgetFilter</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference">BillingBudgetBudgetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRules">ThresholdRules</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList">BillingBudgetThresholdRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference">BillingBudgetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRuleInput">AllUpdatesRuleInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.amountInput">AmountInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccountInput">BillingAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilterInput">BudgetFilterInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRulesInput">ThresholdRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccount">BillingAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.billingBudget.BillingBudget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.billingBudget.BillingBudget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.billingBudget.BillingBudget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.billingBudget.BillingBudget.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.billingBudget.BillingBudget.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.billingBudget.BillingBudget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.billingBudget.BillingBudget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.billingBudget.BillingBudget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.billingBudget.BillingBudget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.billingBudget.BillingBudget.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllUpdatesRule`<sup>Required</sup> <a name="AllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRule"></a>

```go
func AllUpdatesRule() BillingBudgetAllUpdatesRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference">BillingBudgetAllUpdatesRuleOutputReference</a>

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-google.billingBudget.BillingBudget.property.amount"></a>

```go
func Amount() BillingBudgetAmountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference">BillingBudgetAmountOutputReference</a>

---

##### `BudgetFilter`<sup>Required</sup> <a name="BudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilter"></a>

```go
func BudgetFilter() BillingBudgetBudgetFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference">BillingBudgetBudgetFilterOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.billingBudget.BillingBudget.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ThresholdRules`<sup>Required</sup> <a name="ThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRules"></a>

```go
func ThresholdRules() BillingBudgetThresholdRulesList
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList">BillingBudgetThresholdRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.property.timeouts"></a>

```go
func Timeouts() BillingBudgetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference">BillingBudgetTimeoutsOutputReference</a>

---

##### `AllUpdatesRuleInput`<sup>Optional</sup> <a name="AllUpdatesRuleInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRuleInput"></a>

```go
func AllUpdatesRuleInput() BillingBudgetAllUpdatesRule
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.amountInput"></a>

```go
func AmountInput() BillingBudgetAmount
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---

##### `BillingAccountInput`<sup>Optional</sup> <a name="BillingAccountInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccountInput"></a>

```go
func BillingAccountInput() *string
```

- *Type:* *string

---

##### `BudgetFilterInput`<sup>Optional</sup> <a name="BudgetFilterInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilterInput"></a>

```go
func BudgetFilterInput() BillingBudgetBudgetFilter
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ThresholdRulesInput`<sup>Optional</sup> <a name="ThresholdRulesInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRulesInput"></a>

```go
func ThresholdRulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccount"></a>

```go
func BillingAccount() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.billingBudget.BillingBudget.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.billingBudget.BillingBudget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.billingBudget.BillingBudget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingBudgetAllUpdatesRule <a name="BillingBudgetAllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

&billingbudget.BillingBudgetAllUpdatesRule {
	DisableDefaultIamRecipients: interface{},
	MonitoringNotificationChannels: *[]*string,
	PubsubTopic: *string,
	SchemaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients">DisableDefaultIamRecipients</a></code> | <code>interface{}</code> | Boolean. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.monitoringNotificationChannels">MonitoringNotificationChannels</a></code> | <code>*[]*string</code> | The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.schemaVersion">SchemaVersion</a></code> | <code>*string</code> | The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format. |

---

##### `DisableDefaultIamRecipients`<sup>Optional</sup> <a name="DisableDefaultIamRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients"></a>

```go
DisableDefaultIamRecipients interface{}
```

- *Type:* interface{}

Boolean.

When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#disable_default_iam_recipients BillingBudget#disable_default_iam_recipients}

---

##### `MonitoringNotificationChannels`<sup>Optional</sup> <a name="MonitoringNotificationChannels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.monitoringNotificationChannels"></a>

```go
MonitoringNotificationChannels *[]*string
```

- *Type:* *[]*string

The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#monitoring_notification_channels BillingBudget#monitoring_notification_channels}

---

##### `PubsubTopic`<sup>Optional</sup> <a name="PubsubTopic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.pubsubTopic"></a>

```go
PubsubTopic *string
```

- *Type:* *string

The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}.

Updates are sent
at regular intervals to the topic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#pubsub_topic BillingBudget#pubsub_topic}

---

##### `SchemaVersion`<sup>Optional</sup> <a name="SchemaVersion" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.schemaVersion"></a>

```go
SchemaVersion *string
```

- *Type:* *string

The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#schema_version BillingBudget#schema_version}

---

### BillingBudgetAmount <a name="BillingBudgetAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

&billingbudget.BillingBudgetAmount {
	LastPeriodAmount: interface{},
	SpecifiedAmount: github.com/cdktf/cdktf-provider-google-go/google.billingBudget.BillingBudgetAmountSpecifiedAmount,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.lastPeriodAmount">LastPeriodAmount</a></code> | <code>interface{}</code> | Configures a budget amount that is automatically set to 100% of last period's spend. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.specifiedAmount">SpecifiedAmount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | specified_amount block. |

---

##### `LastPeriodAmount`<sup>Optional</sup> <a name="LastPeriodAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.lastPeriodAmount"></a>

```go
LastPeriodAmount interface{}
```

- *Type:* interface{}

Configures a budget amount that is automatically set to 100% of last period's spend.

Boolean. Set value to true to use. Do not set to false, instead
use the 'specified_amount' block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#last_period_amount BillingBudget#last_period_amount}

---

##### `SpecifiedAmount`<sup>Optional</sup> <a name="SpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.specifiedAmount"></a>

```go
SpecifiedAmount BillingBudgetAmountSpecifiedAmount
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

specified_amount block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#specified_amount BillingBudget#specified_amount}

---

### BillingBudgetAmountSpecifiedAmount <a name="BillingBudgetAmountSpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

&billingbudget.BillingBudgetAmountSpecifiedAmount {
	CurrencyCode: *string,
	Nanos: *f64,
	Units: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | The 3-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.nanos">Nanos</a></code> | <code>*f64</code> | Number of nano (10^-9) units of the amount. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.units">Units</a></code> | <code>*string</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `CurrencyCode`<sup>Optional</sup> <a name="CurrencyCode" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.currencyCode"></a>

```go
CurrencyCode *string
```

- *Type:* *string

The 3-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#currency_code BillingBudget#currency_code}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Number of nano (10^-9) units of the amount.

The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#nanos BillingBudget#nanos}

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.units"></a>

```go
Units *string
```

- *Type:* *string

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#units BillingBudget#units}

---

### BillingBudgetBudgetFilter <a name="BillingBudgetBudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

&billingbudget.BillingBudgetBudgetFilter {
	CalendarPeriod: *string,
	CreditTypes: *[]*string,
	CreditTypesTreatment: *string,
	CustomPeriod: github.com/cdktf/cdktf-provider-google-go/google.billingBudget.BillingBudgetBudgetFilterCustomPeriod,
	Labels: *map[string]*string,
	Projects: *[]*string,
	Services: *[]*string,
	Subaccounts: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.calendarPeriod">CalendarPeriod</a></code> | <code>*string</code> | A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypes">CreditTypes</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypesTreatment">CreditTypesTreatment</a></code> | <code>*string</code> | Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"]. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.customPeriod">CustomPeriod</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | custom_period block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.projects">Projects</a></code> | <code>*[]*string</code> | A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.services">Services</a></code> | <code>*[]*string</code> | A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.subaccounts">Subaccounts</a></code> | <code>*[]*string</code> | A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget. |

---

##### `CalendarPeriod`<sup>Optional</sup> <a name="CalendarPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.calendarPeriod"></a>

```go
CalendarPeriod *string
```

- *Type:* *string

A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start.

Grammatically, "the start of the current CalendarPeriod".
All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).

Exactly one of 'calendar_period', 'custom_period' must be provided. Possible values: ["MONTH", "QUARTER", "YEAR", "CALENDAR_PERIOD_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#calendar_period BillingBudget#calendar_period}

---

##### `CreditTypes`<sup>Optional</sup> <a name="CreditTypes" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypes"></a>

```go
CreditTypes *[]*string
```

- *Type:* *[]*string

Optional.

If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,
this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.
If creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.

*Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#credit_types BillingBudget#credit_types}

---

##### `CreditTypesTreatment`<sup>Optional</sup> <a name="CreditTypesTreatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypesTreatment"></a>

```go
CreditTypesTreatment *string
```

- *Type:* *string

Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#credit_types_treatment BillingBudget#credit_types_treatment}

---

##### `CustomPeriod`<sup>Optional</sup> <a name="CustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.customPeriod"></a>

```go
CustomPeriod BillingBudgetBudgetFilterCustomPeriod
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

custom_period block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#custom_period BillingBudget#custom_period}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#labels BillingBudget#labels}

---

##### `Projects`<sup>Optional</sup> <a name="Projects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.projects"></a>

```go
Projects *[]*string
```

- *Type:* *[]*string

A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget.

If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#projects BillingBudget#projects}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.services"></a>

```go
Services *[]*string
```

- *Type:* *[]*string

A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget.

If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#services BillingBudget#services}

---

##### `Subaccounts`<sup>Optional</sup> <a name="Subaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.subaccounts"></a>

```go
Subaccounts *[]*string
```

- *Type:* *[]*string

A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget.

If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.

*Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#subaccounts BillingBudget#subaccounts}

---

### BillingBudgetBudgetFilterCustomPeriod <a name="BillingBudgetBudgetFilterCustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

&billingbudget.BillingBudgetBudgetFilterCustomPeriod {
	StartDate: github.com/cdktf/cdktf-provider-google-go/google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate,
	EndDate: github.com/cdktf/cdktf-provider-google-go/google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | end_date block. |

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.startDate"></a>

```go
StartDate BillingBudgetBudgetFilterCustomPeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#start_date BillingBudget#start_date}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.endDate"></a>

```go
EndDate BillingBudgetBudgetFilterCustomPeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#end_date BillingBudget#end_date}

---

### BillingBudgetBudgetFilterCustomPeriodEndDate <a name="BillingBudgetBudgetFilterCustomPeriodEndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

&billingbudget.BillingBudgetBudgetFilterCustomPeriodEndDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.day">Day</a></code> | <code>*f64</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.month">Month</a></code> | <code>*f64</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.year">Year</a></code> | <code>*f64</code> | Year of the date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#day BillingBudget#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#month BillingBudget#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#year BillingBudget#year}

---

### BillingBudgetBudgetFilterCustomPeriodStartDate <a name="BillingBudgetBudgetFilterCustomPeriodStartDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

&billingbudget.BillingBudgetBudgetFilterCustomPeriodStartDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.day">Day</a></code> | <code>*f64</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.month">Month</a></code> | <code>*f64</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.year">Year</a></code> | <code>*f64</code> | Year of the date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#day BillingBudget#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#month BillingBudget#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#year BillingBudget#year}

---

### BillingBudgetConfig <a name="BillingBudgetConfig" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

&billingbudget.BillingBudgetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Amount: github.com/cdktf/cdktf-provider-google-go/google.billingBudget.BillingBudgetAmount,
	BillingAccount: *string,
	AllUpdatesRule: github.com/cdktf/cdktf-provider-google-go/google.billingBudget.BillingBudgetAllUpdatesRule,
	BudgetFilter: github.com/cdktf/cdktf-provider-google-go/google.billingBudget.BillingBudgetBudgetFilter,
	DisplayName: *string,
	Id: *string,
	ThresholdRules: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.billingBudget.BillingBudgetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.amount">Amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | amount block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.billingAccount">BillingAccount</a></code> | <code>*string</code> | ID of the billing account to set a budget on. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.allUpdatesRule">AllUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | all_updates_rule block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.budgetFilter">BudgetFilter</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | budget_filter block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User data for display name in UI. Must be <= 60 chars. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#id BillingBudget#id}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.thresholdRules">ThresholdRules</a></code> | <code>interface{}</code> | threshold_rules block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.amount"></a>

```go
Amount BillingBudgetAmount
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

amount block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#amount BillingBudget#amount}

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.billingAccount"></a>

```go
BillingAccount *string
```

- *Type:* *string

ID of the billing account to set a budget on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#billing_account BillingBudget#billing_account}

---

##### `AllUpdatesRule`<sup>Optional</sup> <a name="AllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.allUpdatesRule"></a>

```go
AllUpdatesRule BillingBudgetAllUpdatesRule
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

all_updates_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#all_updates_rule BillingBudget#all_updates_rule}

---

##### `BudgetFilter`<sup>Optional</sup> <a name="BudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.budgetFilter"></a>

```go
BudgetFilter BillingBudgetBudgetFilter
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

budget_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#budget_filter BillingBudget#budget_filter}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User data for display name in UI. Must be <= 60 chars.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#display_name BillingBudget#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#id BillingBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ThresholdRules`<sup>Optional</sup> <a name="ThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.thresholdRules"></a>

```go
ThresholdRules interface{}
```

- *Type:* interface{}

threshold_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#threshold_rules BillingBudget#threshold_rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.timeouts"></a>

```go
Timeouts BillingBudgetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#timeouts BillingBudget#timeouts}

---

### BillingBudgetThresholdRules <a name="BillingBudgetThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

&billingbudget.BillingBudgetThresholdRules {
	ThresholdPercent: *f64,
	SpendBasis: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.thresholdPercent">ThresholdPercent</a></code> | <code>*f64</code> | Send an alert when this threshold is exceeded. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.spendBasis">SpendBasis</a></code> | <code>*string</code> | The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"]. |

---

##### `ThresholdPercent`<sup>Required</sup> <a name="ThresholdPercent" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.thresholdPercent"></a>

```go
ThresholdPercent *f64
```

- *Type:* *f64

Send an alert when this threshold is exceeded.

This is a
1.0-based percentage, so 0.5 = 50%. Must be >= 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#threshold_percent BillingBudget#threshold_percent}

---

##### `SpendBasis`<sup>Optional</sup> <a name="SpendBasis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.spendBasis"></a>

```go
SpendBasis *string
```

- *Type:* *string

The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#spend_basis BillingBudget#spend_basis}

---

### BillingBudgetTimeouts <a name="BillingBudgetTimeouts" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

&billingbudget.BillingBudgetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#create BillingBudget#create}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#delete BillingBudget#delete}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#update BillingBudget#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#create BillingBudget#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#delete BillingBudget#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/billing_budget#update BillingBudget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingBudgetAllUpdatesRuleOutputReference <a name="BillingBudgetAllUpdatesRuleOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.NewBillingBudgetAllUpdatesRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingBudgetAllUpdatesRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableDefaultIamRecipients` <a name="ResetDisableDefaultIamRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients"></a>

```go
func ResetDisableDefaultIamRecipients()
```

##### `ResetMonitoringNotificationChannels` <a name="ResetMonitoringNotificationChannels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels"></a>

```go
func ResetMonitoringNotificationChannels()
```

##### `ResetPubsubTopic` <a name="ResetPubsubTopic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic"></a>

```go
func ResetPubsubTopic()
```

##### `ResetSchemaVersion` <a name="ResetSchemaVersion" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion"></a>

```go
func ResetSchemaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput">DisableDefaultIamRecipientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput">MonitoringNotificationChannelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput">SchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients">DisableDefaultIamRecipients</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels">MonitoringNotificationChannels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion">SchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableDefaultIamRecipientsInput`<sup>Optional</sup> <a name="DisableDefaultIamRecipientsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput"></a>

```go
func DisableDefaultIamRecipientsInput() interface{}
```

- *Type:* interface{}

---

##### `MonitoringNotificationChannelsInput`<sup>Optional</sup> <a name="MonitoringNotificationChannelsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput"></a>

```go
func MonitoringNotificationChannelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput"></a>

```go
func PubsubTopicInput() *string
```

- *Type:* *string

---

##### `SchemaVersionInput`<sup>Optional</sup> <a name="SchemaVersionInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput"></a>

```go
func SchemaVersionInput() *string
```

- *Type:* *string

---

##### `DisableDefaultIamRecipients`<sup>Required</sup> <a name="DisableDefaultIamRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients"></a>

```go
func DisableDefaultIamRecipients() interface{}
```

- *Type:* interface{}

---

##### `MonitoringNotificationChannels`<sup>Required</sup> <a name="MonitoringNotificationChannels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels"></a>

```go
func MonitoringNotificationChannels() *[]*string
```

- *Type:* *[]*string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic"></a>

```go
func PubsubTopic() *string
```

- *Type:* *string

---

##### `SchemaVersion`<sup>Required</sup> <a name="SchemaVersion" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion"></a>

```go
func SchemaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() BillingBudgetAllUpdatesRule
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---


### BillingBudgetAmountOutputReference <a name="BillingBudgetAmountOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.NewBillingBudgetAmountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingBudgetAmountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpecifiedAmount` <a name="PutSpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount"></a>

```go
func PutSpecifiedAmount(value BillingBudgetAmountSpecifiedAmount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---

##### `ResetLastPeriodAmount` <a name="ResetLastPeriodAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetLastPeriodAmount"></a>

```go
func ResetLastPeriodAmount()
```

##### `ResetSpecifiedAmount` <a name="ResetSpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetSpecifiedAmount"></a>

```go
func ResetSpecifiedAmount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmount">SpecifiedAmount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference">BillingBudgetAmountSpecifiedAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmountInput">LastPeriodAmountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmountInput">SpecifiedAmountInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmount">LastPeriodAmount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpecifiedAmount`<sup>Required</sup> <a name="SpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmount"></a>

```go
func SpecifiedAmount() BillingBudgetAmountSpecifiedAmountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference">BillingBudgetAmountSpecifiedAmountOutputReference</a>

---

##### `LastPeriodAmountInput`<sup>Optional</sup> <a name="LastPeriodAmountInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmountInput"></a>

```go
func LastPeriodAmountInput() interface{}
```

- *Type:* interface{}

---

##### `SpecifiedAmountInput`<sup>Optional</sup> <a name="SpecifiedAmountInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmountInput"></a>

```go
func SpecifiedAmountInput() BillingBudgetAmountSpecifiedAmount
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---

##### `LastPeriodAmount`<sup>Required</sup> <a name="LastPeriodAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmount"></a>

```go
func LastPeriodAmount() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.internalValue"></a>

```go
func InternalValue() BillingBudgetAmount
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---


### BillingBudgetAmountSpecifiedAmountOutputReference <a name="BillingBudgetAmountSpecifiedAmountOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.NewBillingBudgetAmountSpecifiedAmountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingBudgetAmountSpecifiedAmountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurrencyCode` <a name="ResetCurrencyCode" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode"></a>

```go
func ResetCurrencyCode()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetUnits` <a name="ResetUnits" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetUnits"></a>

```go
func ResetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput">CurrencyCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrencyCodeInput`<sup>Optional</sup> <a name="CurrencyCodeInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput"></a>

```go
func CurrencyCodeInput() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue"></a>

```go
func InternalValue() BillingBudgetAmountSpecifiedAmount
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---


### BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.NewBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue"></a>

```go
func InternalValue() BillingBudgetBudgetFilterCustomPeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---


### BillingBudgetBudgetFilterCustomPeriodOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.NewBillingBudgetBudgetFilterCustomPeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingBudgetBudgetFilterCustomPeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndDate` <a name="PutEndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate"></a>

```go
func PutEndDate(value BillingBudgetBudgetFilterCustomPeriodEndDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `PutStartDate` <a name="PutStartDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate"></a>

```go
func PutStartDate(value BillingBudgetBudgetFilterCustomPeriodStartDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate"></a>

```go
func ResetEndDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput">EndDateInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput">StartDateInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate"></a>

```go
func EndDate() BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a>

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate"></a>

```go
func StartDate() BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a>

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput"></a>

```go
func EndDateInput() BillingBudgetBudgetFilterCustomPeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput"></a>

```go
func StartDateInput() BillingBudgetBudgetFilterCustomPeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() BillingBudgetBudgetFilterCustomPeriod
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---


### BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.NewBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue"></a>

```go
func InternalValue() BillingBudgetBudgetFilterCustomPeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---


### BillingBudgetBudgetFilterOutputReference <a name="BillingBudgetBudgetFilterOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.NewBillingBudgetBudgetFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingBudgetBudgetFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetServices">ResetServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetSubaccounts">ResetSubaccounts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPeriod` <a name="PutCustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod"></a>

```go
func PutCustomPeriod(value BillingBudgetBudgetFilterCustomPeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---

##### `ResetCalendarPeriod` <a name="ResetCalendarPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCalendarPeriod"></a>

```go
func ResetCalendarPeriod()
```

##### `ResetCreditTypes` <a name="ResetCreditTypes" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypes"></a>

```go
func ResetCreditTypes()
```

##### `ResetCreditTypesTreatment` <a name="ResetCreditTypesTreatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment"></a>

```go
func ResetCreditTypesTreatment()
```

##### `ResetCustomPeriod` <a name="ResetCustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCustomPeriod"></a>

```go
func ResetCustomPeriod()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProjects` <a name="ResetProjects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetProjects"></a>

```go
func ResetProjects()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetServices"></a>

```go
func ResetServices()
```

##### `ResetSubaccounts` <a name="ResetSubaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetSubaccounts"></a>

```go
func ResetSubaccounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriod">CustomPeriod</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference">BillingBudgetBudgetFilterCustomPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput">CalendarPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesInput">CreditTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput">CreditTypesTreatmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriodInput">CustomPeriodInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projectsInput">ProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.servicesInput">ServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccountsInput">SubaccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriod">CalendarPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypes">CreditTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment">CreditTypesTreatment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projects">Projects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccounts">Subaccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomPeriod`<sup>Required</sup> <a name="CustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriod"></a>

```go
func CustomPeriod() BillingBudgetBudgetFilterCustomPeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference">BillingBudgetBudgetFilterCustomPeriodOutputReference</a>

---

##### `CalendarPeriodInput`<sup>Optional</sup> <a name="CalendarPeriodInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput"></a>

```go
func CalendarPeriodInput() *string
```

- *Type:* *string

---

##### `CreditTypesInput`<sup>Optional</sup> <a name="CreditTypesInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesInput"></a>

```go
func CreditTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CreditTypesTreatmentInput`<sup>Optional</sup> <a name="CreditTypesTreatmentInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput"></a>

```go
func CreditTypesTreatmentInput() *string
```

- *Type:* *string

---

##### `CustomPeriodInput`<sup>Optional</sup> <a name="CustomPeriodInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriodInput"></a>

```go
func CustomPeriodInput() BillingBudgetBudgetFilterCustomPeriod
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectsInput`<sup>Optional</sup> <a name="ProjectsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projectsInput"></a>

```go
func ProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.servicesInput"></a>

```go
func ServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubaccountsInput`<sup>Optional</sup> <a name="SubaccountsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccountsInput"></a>

```go
func SubaccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CalendarPeriod`<sup>Required</sup> <a name="CalendarPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriod"></a>

```go
func CalendarPeriod() *string
```

- *Type:* *string

---

##### `CreditTypes`<sup>Required</sup> <a name="CreditTypes" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypes"></a>

```go
func CreditTypes() *[]*string
```

- *Type:* *[]*string

---

##### `CreditTypesTreatment`<sup>Required</sup> <a name="CreditTypesTreatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment"></a>

```go
func CreditTypesTreatment() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projects"></a>

```go
func Projects() *[]*string
```

- *Type:* *[]*string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

##### `Subaccounts`<sup>Required</sup> <a name="Subaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccounts"></a>

```go
func Subaccounts() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() BillingBudgetBudgetFilter
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---


### BillingBudgetThresholdRulesList <a name="BillingBudgetThresholdRulesList" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.NewBillingBudgetThresholdRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BillingBudgetThresholdRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get"></a>

```go
func Get(index *f64) BillingBudgetThresholdRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingBudgetThresholdRulesOutputReference <a name="BillingBudgetThresholdRulesOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.NewBillingBudgetThresholdRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BillingBudgetThresholdRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSpendBasis` <a name="ResetSpendBasis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resetSpendBasis"></a>

```go
func ResetSpendBasis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasisInput">SpendBasisInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput">ThresholdPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasis">SpendBasis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercent">ThresholdPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpendBasisInput`<sup>Optional</sup> <a name="SpendBasisInput" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasisInput"></a>

```go
func SpendBasisInput() *string
```

- *Type:* *string

---

##### `ThresholdPercentInput`<sup>Optional</sup> <a name="ThresholdPercentInput" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput"></a>

```go
func ThresholdPercentInput() *f64
```

- *Type:* *f64

---

##### `SpendBasis`<sup>Required</sup> <a name="SpendBasis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasis"></a>

```go
func SpendBasis() *string
```

- *Type:* *string

---

##### `ThresholdPercent`<sup>Required</sup> <a name="ThresholdPercent" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercent"></a>

```go
func ThresholdPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingBudgetTimeoutsOutputReference <a name="BillingBudgetTimeoutsOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/billingbudget"

billingbudget.NewBillingBudgetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingBudgetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



