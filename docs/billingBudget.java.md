# `billingBudget` Submodule <a name="`billingBudget` Submodule" id="@cdktf/provider-google.billingBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingBudget <a name="BillingBudget" id="@cdktf/provider-google.billingBudget.BillingBudget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget google_billing_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudget;

BillingBudget.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .amount(BillingBudgetAmount)
    .billingAccount(java.lang.String)
//  .allUpdatesRule(BillingBudgetAllUpdatesRule)
//  .budgetFilter(BillingBudgetBudgetFilter)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .ownershipScope(java.lang.String)
//  .thresholdRules(IResolvable)
//  .thresholdRules(java.util.List<BillingBudgetThresholdRules>)
//  .timeouts(BillingBudgetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.amount">amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | amount block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.billingAccount">billingAccount</a></code> | <code>java.lang.String</code> | ID of the billing account to set a budget on. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.allUpdatesRule">allUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | all_updates_rule block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.budgetFilter">budgetFilter</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | budget_filter block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User data for display name in UI. Must be <= 60 chars. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#id BillingBudget#id}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.ownershipScope">ownershipScope</a></code> | <code>java.lang.String</code> | The ownership scope of the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.thresholdRules">thresholdRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>></code> | threshold_rules block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.amount"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#amount BillingBudget#amount}

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.billingAccount"></a>

- *Type:* java.lang.String

ID of the billing account to set a budget on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#billing_account BillingBudget#billing_account}

---

##### `allUpdatesRule`<sup>Optional</sup> <a name="allUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.allUpdatesRule"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

all_updates_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#all_updates_rule BillingBudget#all_updates_rule}

---

##### `budgetFilter`<sup>Optional</sup> <a name="budgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.budgetFilter"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

budget_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#budget_filter BillingBudget#budget_filter}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User data for display name in UI. Must be <= 60 chars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#display_name BillingBudget#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#id BillingBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownershipScope`<sup>Optional</sup> <a name="ownershipScope" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.ownershipScope"></a>

- *Type:* java.lang.String

The ownership scope of the budget.

The ownership scope and users'
IAM permissions determine who has full access to the budget's data. Possible values: ["OWNERSHIP_SCOPE_UNSPECIFIED", "ALL_USERS", "BILLING_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#ownership_scope BillingBudget#ownership_scope}

---

##### `thresholdRules`<sup>Optional</sup> <a name="thresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.thresholdRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>>

threshold_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#threshold_rules BillingBudget#threshold_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#timeouts BillingBudget#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule">putAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putAmount">putAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter">putBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules">putThresholdRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetAllUpdatesRule">resetAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetBudgetFilter">resetBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetOwnershipScope">resetOwnershipScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetThresholdRules">resetThresholdRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.billingBudget.BillingBudget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.billingBudget.BillingBudget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.billingBudget.BillingBudget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.billingBudget.BillingBudget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.billingBudget.BillingBudget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.billingBudget.BillingBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.billingBudget.BillingBudget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.billingBudget.BillingBudget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudget.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.billingBudget.BillingBudget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.billingBudget.BillingBudget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.billingBudget.BillingBudget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.billingBudget.BillingBudget.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.billingBudget.BillingBudget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllUpdatesRule` <a name="putAllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule"></a>

```java
public void putAllUpdatesRule(BillingBudgetAllUpdatesRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---

##### `putAmount` <a name="putAmount" id="@cdktf/provider-google.billingBudget.BillingBudget.putAmount"></a>

```java
public void putAmount(BillingBudgetAmount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putAmount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---

##### `putBudgetFilter` <a name="putBudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter"></a>

```java
public void putBudgetFilter(BillingBudgetBudgetFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---

##### `putThresholdRules` <a name="putThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules"></a>

```java
public void putThresholdRules(IResolvable OR java.util.List<BillingBudgetThresholdRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts"></a>

```java
public void putTimeouts(BillingBudgetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

---

##### `resetAllUpdatesRule` <a name="resetAllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudget.resetAllUpdatesRule"></a>

```java
public void resetAllUpdatesRule()
```

##### `resetBudgetFilter` <a name="resetBudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudget.resetBudgetFilter"></a>

```java
public void resetBudgetFilter()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.billingBudget.BillingBudget.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.billingBudget.BillingBudget.resetId"></a>

```java
public void resetId()
```

##### `resetOwnershipScope` <a name="resetOwnershipScope" id="@cdktf/provider-google.billingBudget.BillingBudget.resetOwnershipScope"></a>

```java
public void resetOwnershipScope()
```

##### `resetThresholdRules` <a name="resetThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudget.resetThresholdRules"></a>

```java
public void resetThresholdRules()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BillingBudget resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.billingBudget.BillingBudget.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudget;

BillingBudget.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudget;

BillingBudget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudget;

BillingBudget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudget;

BillingBudget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BillingBudget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BillingBudget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BillingBudget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BillingBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BillingBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRule">allUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference">BillingBudgetAllUpdatesRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.amount">amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference">BillingBudgetAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilter">budgetFilter</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference">BillingBudgetBudgetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRules">thresholdRules</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList">BillingBudgetThresholdRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference">BillingBudgetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRuleInput">allUpdatesRuleInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.amountInput">amountInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccountInput">billingAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilterInput">budgetFilterInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.ownershipScopeInput">ownershipScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRulesInput">thresholdRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccount">billingAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.ownershipScope">ownershipScope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.billingBudget.BillingBudget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.billingBudget.BillingBudget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.billingBudget.BillingBudget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.billingBudget.BillingBudget.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.billingBudget.BillingBudget.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.billingBudget.BillingBudget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.billingBudget.BillingBudget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.billingBudget.BillingBudget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.billingBudget.BillingBudget.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allUpdatesRule`<sup>Required</sup> <a name="allUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRule"></a>

```java
public BillingBudgetAllUpdatesRuleOutputReference getAllUpdatesRule();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference">BillingBudgetAllUpdatesRuleOutputReference</a>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google.billingBudget.BillingBudget.property.amount"></a>

```java
public BillingBudgetAmountOutputReference getAmount();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference">BillingBudgetAmountOutputReference</a>

---

##### `budgetFilter`<sup>Required</sup> <a name="budgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilter"></a>

```java
public BillingBudgetBudgetFilterOutputReference getBudgetFilter();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference">BillingBudgetBudgetFilterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.billingBudget.BillingBudget.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `thresholdRules`<sup>Required</sup> <a name="thresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRules"></a>

```java
public BillingBudgetThresholdRulesList getThresholdRules();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList">BillingBudgetThresholdRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.property.timeouts"></a>

```java
public BillingBudgetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference">BillingBudgetTimeoutsOutputReference</a>

---

##### `allUpdatesRuleInput`<sup>Optional</sup> <a name="allUpdatesRuleInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRuleInput"></a>

```java
public BillingBudgetAllUpdatesRule getAllUpdatesRuleInput();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.amountInput"></a>

```java
public BillingBudgetAmount getAmountInput();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---

##### `billingAccountInput`<sup>Optional</sup> <a name="billingAccountInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccountInput"></a>

```java
public java.lang.String getBillingAccountInput();
```

- *Type:* java.lang.String

---

##### `budgetFilterInput`<sup>Optional</sup> <a name="budgetFilterInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilterInput"></a>

```java
public BillingBudgetBudgetFilter getBudgetFilterInput();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ownershipScopeInput`<sup>Optional</sup> <a name="ownershipScopeInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.ownershipScopeInput"></a>

```java
public java.lang.String getOwnershipScopeInput();
```

- *Type:* java.lang.String

---

##### `thresholdRulesInput`<sup>Optional</sup> <a name="thresholdRulesInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRulesInput"></a>

```java
public java.lang.Object getThresholdRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.billingBudget.BillingBudget.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccount"></a>

```java
public java.lang.String getBillingAccount();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.billingBudget.BillingBudget.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ownershipScope`<sup>Required</sup> <a name="ownershipScope" id="@cdktf/provider-google.billingBudget.BillingBudget.property.ownershipScope"></a>

```java
public java.lang.String getOwnershipScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.billingBudget.BillingBudget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BillingBudgetAllUpdatesRule <a name="BillingBudgetAllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetAllUpdatesRule;

BillingBudgetAllUpdatesRule.builder()
//  .disableDefaultIamRecipients(java.lang.Boolean)
//  .disableDefaultIamRecipients(IResolvable)
//  .enableProjectLevelRecipients(java.lang.Boolean)
//  .enableProjectLevelRecipients(IResolvable)
//  .monitoringNotificationChannels(java.util.List<java.lang.String>)
//  .pubsubTopic(java.lang.String)
//  .schemaVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients">disableDefaultIamRecipients</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Boolean. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.enableProjectLevelRecipients">enableProjectLevelRecipients</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.monitoringNotificationChannels">monitoringNotificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.schemaVersion">schemaVersion</a></code> | <code>java.lang.String</code> | The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format. |

---

##### `disableDefaultIamRecipients`<sup>Optional</sup> <a name="disableDefaultIamRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients"></a>

```java
public java.lang.Object getDisableDefaultIamRecipients();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Boolean.

When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#disable_default_iam_recipients BillingBudget#disable_default_iam_recipients}

---

##### `enableProjectLevelRecipients`<sup>Optional</sup> <a name="enableProjectLevelRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.enableProjectLevelRecipients"></a>

```java
public java.lang.Object getEnableProjectLevelRecipients();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project.

This field will be ignored if the budget has multiple or no project configured.

Currently, project level recipients are the users with Owner role on a cloud project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#enable_project_level_recipients BillingBudget#enable_project_level_recipients}

---

##### `monitoringNotificationChannels`<sup>Optional</sup> <a name="monitoringNotificationChannels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.monitoringNotificationChannels"></a>

```java
public java.util.List<java.lang.String> getMonitoringNotificationChannels();
```

- *Type:* java.util.List<java.lang.String>

The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#monitoring_notification_channels BillingBudget#monitoring_notification_channels}

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}.

Updates are sent
at regular intervals to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#pubsub_topic BillingBudget#pubsub_topic}

---

##### `schemaVersion`<sup>Optional</sup> <a name="schemaVersion" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.schemaVersion"></a>

```java
public java.lang.String getSchemaVersion();
```

- *Type:* java.lang.String

The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#schema_version BillingBudget#schema_version}

---

### BillingBudgetAmount <a name="BillingBudgetAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetAmount;

BillingBudgetAmount.builder()
//  .lastPeriodAmount(java.lang.Boolean)
//  .lastPeriodAmount(IResolvable)
//  .specifiedAmount(BillingBudgetAmountSpecifiedAmount)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.lastPeriodAmount">lastPeriodAmount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Configures a budget amount that is automatically set to 100% of last period's spend. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.specifiedAmount">specifiedAmount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | specified_amount block. |

---

##### `lastPeriodAmount`<sup>Optional</sup> <a name="lastPeriodAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.lastPeriodAmount"></a>

```java
public java.lang.Object getLastPeriodAmount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Configures a budget amount that is automatically set to 100% of last period's spend.

Boolean. Set value to true to use. Do not set to false, instead
use the 'specified_amount' block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#last_period_amount BillingBudget#last_period_amount}

---

##### `specifiedAmount`<sup>Optional</sup> <a name="specifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.specifiedAmount"></a>

```java
public BillingBudgetAmountSpecifiedAmount getSpecifiedAmount();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

specified_amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#specified_amount BillingBudget#specified_amount}

---

### BillingBudgetAmountSpecifiedAmount <a name="BillingBudgetAmountSpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetAmountSpecifiedAmount;

BillingBudgetAmountSpecifiedAmount.builder()
//  .currencyCode(java.lang.String)
//  .nanos(java.lang.Number)
//  .units(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | The 3-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Number of nano (10^-9) units of the amount. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.units">units</a></code> | <code>java.lang.String</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `currencyCode`<sup>Optional</sup> <a name="currencyCode" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

The 3-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#currency_code BillingBudget#currency_code}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Number of nano (10^-9) units of the amount.

The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#nanos BillingBudget#nanos}

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#units BillingBudget#units}

---

### BillingBudgetBudgetFilter <a name="BillingBudgetBudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetBudgetFilter;

BillingBudgetBudgetFilter.builder()
//  .calendarPeriod(java.lang.String)
//  .creditTypes(java.util.List<java.lang.String>)
//  .creditTypesTreatment(java.lang.String)
//  .customPeriod(BillingBudgetBudgetFilterCustomPeriod)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .projects(java.util.List<java.lang.String>)
//  .resourceAncestors(java.util.List<java.lang.String>)
//  .services(java.util.List<java.lang.String>)
//  .subaccounts(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.calendarPeriod">calendarPeriod</a></code> | <code>java.lang.String</code> | A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypes">creditTypes</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypesTreatment">creditTypesTreatment</a></code> | <code>java.lang.String</code> | Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"]. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.customPeriod">customPeriod</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | custom_period block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.projects">projects</a></code> | <code>java.util.List<java.lang.String></code> | A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.resourceAncestors">resourceAncestors</a></code> | <code>java.util.List<java.lang.String></code> | A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.subaccounts">subaccounts</a></code> | <code>java.util.List<java.lang.String></code> | A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget. |

---

##### `calendarPeriod`<sup>Optional</sup> <a name="calendarPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.calendarPeriod"></a>

```java
public java.lang.String getCalendarPeriod();
```

- *Type:* java.lang.String

A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start.

Grammatically, "the start of the current CalendarPeriod".
All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).

Exactly one of 'calendar_period', 'custom_period' must be provided. Possible values: ["MONTH", "QUARTER", "YEAR", "CALENDAR_PERIOD_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#calendar_period BillingBudget#calendar_period}

---

##### `creditTypes`<sup>Optional</sup> <a name="creditTypes" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypes"></a>

```java
public java.util.List<java.lang.String> getCreditTypes();
```

- *Type:* java.util.List<java.lang.String>

Optional.

If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,
this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.
If creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an empty array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#credit_types BillingBudget#credit_types}

---

##### `creditTypesTreatment`<sup>Optional</sup> <a name="creditTypesTreatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypesTreatment"></a>

```java
public java.lang.String getCreditTypesTreatment();
```

- *Type:* java.lang.String

Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#credit_types_treatment BillingBudget#credit_types_treatment}

---

##### `customPeriod`<sup>Optional</sup> <a name="customPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.customPeriod"></a>

```java
public BillingBudgetBudgetFilterCustomPeriod getCustomPeriod();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

custom_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#custom_period BillingBudget#custom_period}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#labels BillingBudget#labels}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.projects"></a>

```java
public java.util.List<java.lang.String> getProjects();
```

- *Type:* java.util.List<java.lang.String>

A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget.

If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#projects BillingBudget#projects}

---

##### `resourceAncestors`<sup>Optional</sup> <a name="resourceAncestors" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.resourceAncestors"></a>

```java
public java.util.List<java.lang.String> getResourceAncestors();
```

- *Type:* java.util.List<java.lang.String>

A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget.

If omitted, the budget includes all usage that the billing account pays for. If the folder or organization
contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#resource_ancestors BillingBudget#resource_ancestors}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget.

If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#services BillingBudget#services}

---

##### `subaccounts`<sup>Optional</sup> <a name="subaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.subaccounts"></a>

```java
public java.util.List<java.lang.String> getSubaccounts();
```

- *Type:* java.util.List<java.lang.String>

A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget.

If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an empty array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#subaccounts BillingBudget#subaccounts}

---

### BillingBudgetBudgetFilterCustomPeriod <a name="BillingBudgetBudgetFilterCustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetBudgetFilterCustomPeriod;

BillingBudgetBudgetFilterCustomPeriod.builder()
    .startDate(BillingBudgetBudgetFilterCustomPeriodStartDate)
//  .endDate(BillingBudgetBudgetFilterCustomPeriodEndDate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | end_date block. |

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.startDate"></a>

```java
public BillingBudgetBudgetFilterCustomPeriodStartDate getStartDate();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#start_date BillingBudget#start_date}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.endDate"></a>

```java
public BillingBudgetBudgetFilterCustomPeriodEndDate getEndDate();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#end_date BillingBudget#end_date}

---

### BillingBudgetBudgetFilterCustomPeriodEndDate <a name="BillingBudgetBudgetFilterCustomPeriodEndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetBudgetFilterCustomPeriodEndDate;

BillingBudgetBudgetFilterCustomPeriodEndDate.builder()
    .day(java.lang.Number)
    .month(java.lang.Number)
    .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#day BillingBudget#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#month BillingBudget#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#year BillingBudget#year}

---

### BillingBudgetBudgetFilterCustomPeriodStartDate <a name="BillingBudgetBudgetFilterCustomPeriodStartDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetBudgetFilterCustomPeriodStartDate;

BillingBudgetBudgetFilterCustomPeriodStartDate.builder()
    .day(java.lang.Number)
    .month(java.lang.Number)
    .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#day BillingBudget#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#month BillingBudget#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#year BillingBudget#year}

---

### BillingBudgetConfig <a name="BillingBudgetConfig" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetConfig;

BillingBudgetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .amount(BillingBudgetAmount)
    .billingAccount(java.lang.String)
//  .allUpdatesRule(BillingBudgetAllUpdatesRule)
//  .budgetFilter(BillingBudgetBudgetFilter)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .ownershipScope(java.lang.String)
//  .thresholdRules(IResolvable)
//  .thresholdRules(java.util.List<BillingBudgetThresholdRules>)
//  .timeouts(BillingBudgetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.amount">amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | amount block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.billingAccount">billingAccount</a></code> | <code>java.lang.String</code> | ID of the billing account to set a budget on. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.allUpdatesRule">allUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | all_updates_rule block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.budgetFilter">budgetFilter</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | budget_filter block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User data for display name in UI. Must be <= 60 chars. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#id BillingBudget#id}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.ownershipScope">ownershipScope</a></code> | <code>java.lang.String</code> | The ownership scope of the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.thresholdRules">thresholdRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>></code> | threshold_rules block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.amount"></a>

```java
public BillingBudgetAmount getAmount();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#amount BillingBudget#amount}

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.billingAccount"></a>

```java
public java.lang.String getBillingAccount();
```

- *Type:* java.lang.String

ID of the billing account to set a budget on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#billing_account BillingBudget#billing_account}

---

##### `allUpdatesRule`<sup>Optional</sup> <a name="allUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.allUpdatesRule"></a>

```java
public BillingBudgetAllUpdatesRule getAllUpdatesRule();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

all_updates_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#all_updates_rule BillingBudget#all_updates_rule}

---

##### `budgetFilter`<sup>Optional</sup> <a name="budgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.budgetFilter"></a>

```java
public BillingBudgetBudgetFilter getBudgetFilter();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

budget_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#budget_filter BillingBudget#budget_filter}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User data for display name in UI. Must be <= 60 chars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#display_name BillingBudget#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#id BillingBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownershipScope`<sup>Optional</sup> <a name="ownershipScope" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.ownershipScope"></a>

```java
public java.lang.String getOwnershipScope();
```

- *Type:* java.lang.String

The ownership scope of the budget.

The ownership scope and users'
IAM permissions determine who has full access to the budget's data. Possible values: ["OWNERSHIP_SCOPE_UNSPECIFIED", "ALL_USERS", "BILLING_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#ownership_scope BillingBudget#ownership_scope}

---

##### `thresholdRules`<sup>Optional</sup> <a name="thresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.thresholdRules"></a>

```java
public java.lang.Object getThresholdRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>>

threshold_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#threshold_rules BillingBudget#threshold_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.timeouts"></a>

```java
public BillingBudgetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#timeouts BillingBudget#timeouts}

---

### BillingBudgetThresholdRules <a name="BillingBudgetThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetThresholdRules;

BillingBudgetThresholdRules.builder()
    .thresholdPercent(java.lang.Number)
//  .spendBasis(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.thresholdPercent">thresholdPercent</a></code> | <code>java.lang.Number</code> | Send an alert when this threshold is exceeded. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.spendBasis">spendBasis</a></code> | <code>java.lang.String</code> | The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"]. |

---

##### `thresholdPercent`<sup>Required</sup> <a name="thresholdPercent" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.thresholdPercent"></a>

```java
public java.lang.Number getThresholdPercent();
```

- *Type:* java.lang.Number

Send an alert when this threshold is exceeded.

This is a
1.0-based percentage, so 0.5 = 50%. Must be >= 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#threshold_percent BillingBudget#threshold_percent}

---

##### `spendBasis`<sup>Optional</sup> <a name="spendBasis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.spendBasis"></a>

```java
public java.lang.String getSpendBasis();
```

- *Type:* java.lang.String

The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#spend_basis BillingBudget#spend_basis}

---

### BillingBudgetTimeouts <a name="BillingBudgetTimeouts" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetTimeouts;

BillingBudgetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#create BillingBudget#create}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#delete BillingBudget#delete}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#update BillingBudget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#create BillingBudget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#delete BillingBudget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/billing_budget#update BillingBudget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingBudgetAllUpdatesRuleOutputReference <a name="BillingBudgetAllUpdatesRuleOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetAllUpdatesRuleOutputReference;

new BillingBudgetAllUpdatesRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients">resetDisableDefaultIamRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetEnableProjectLevelRecipients">resetEnableProjectLevelRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels">resetMonitoringNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic">resetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion">resetSchemaVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableDefaultIamRecipients` <a name="resetDisableDefaultIamRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients"></a>

```java
public void resetDisableDefaultIamRecipients()
```

##### `resetEnableProjectLevelRecipients` <a name="resetEnableProjectLevelRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetEnableProjectLevelRecipients"></a>

```java
public void resetEnableProjectLevelRecipients()
```

##### `resetMonitoringNotificationChannels` <a name="resetMonitoringNotificationChannels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels"></a>

```java
public void resetMonitoringNotificationChannels()
```

##### `resetPubsubTopic` <a name="resetPubsubTopic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic"></a>

```java
public void resetPubsubTopic()
```

##### `resetSchemaVersion` <a name="resetSchemaVersion" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion"></a>

```java
public void resetSchemaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput">disableDefaultIamRecipientsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipientsInput">enableProjectLevelRecipientsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput">monitoringNotificationChannelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput">schemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients">disableDefaultIamRecipients</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipients">enableProjectLevelRecipients</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels">monitoringNotificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion">schemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableDefaultIamRecipientsInput`<sup>Optional</sup> <a name="disableDefaultIamRecipientsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput"></a>

```java
public java.lang.Object getDisableDefaultIamRecipientsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableProjectLevelRecipientsInput`<sup>Optional</sup> <a name="enableProjectLevelRecipientsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipientsInput"></a>

```java
public java.lang.Object getEnableProjectLevelRecipientsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `monitoringNotificationChannelsInput`<sup>Optional</sup> <a name="monitoringNotificationChannelsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput"></a>

```java
public java.util.List<java.lang.String> getMonitoringNotificationChannelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput"></a>

```java
public java.lang.String getPubsubTopicInput();
```

- *Type:* java.lang.String

---

##### `schemaVersionInput`<sup>Optional</sup> <a name="schemaVersionInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput"></a>

```java
public java.lang.String getSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `disableDefaultIamRecipients`<sup>Required</sup> <a name="disableDefaultIamRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients"></a>

```java
public java.lang.Object getDisableDefaultIamRecipients();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableProjectLevelRecipients`<sup>Required</sup> <a name="enableProjectLevelRecipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipients"></a>

```java
public java.lang.Object getEnableProjectLevelRecipients();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `monitoringNotificationChannels`<sup>Required</sup> <a name="monitoringNotificationChannels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels"></a>

```java
public java.util.List<java.lang.String> getMonitoringNotificationChannels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

---

##### `schemaVersion`<sup>Required</sup> <a name="schemaVersion" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion"></a>

```java
public java.lang.String getSchemaVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.internalValue"></a>

```java
public BillingBudgetAllUpdatesRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---


### BillingBudgetAmountOutputReference <a name="BillingBudgetAmountOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetAmountOutputReference;

new BillingBudgetAmountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount">putSpecifiedAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetLastPeriodAmount">resetLastPeriodAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetSpecifiedAmount">resetSpecifiedAmount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpecifiedAmount` <a name="putSpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount"></a>

```java
public void putSpecifiedAmount(BillingBudgetAmountSpecifiedAmount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---

##### `resetLastPeriodAmount` <a name="resetLastPeriodAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetLastPeriodAmount"></a>

```java
public void resetLastPeriodAmount()
```

##### `resetSpecifiedAmount` <a name="resetSpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetSpecifiedAmount"></a>

```java
public void resetSpecifiedAmount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmount">specifiedAmount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference">BillingBudgetAmountSpecifiedAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmountInput">lastPeriodAmountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmountInput">specifiedAmountInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmount">lastPeriodAmount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `specifiedAmount`<sup>Required</sup> <a name="specifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmount"></a>

```java
public BillingBudgetAmountSpecifiedAmountOutputReference getSpecifiedAmount();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference">BillingBudgetAmountSpecifiedAmountOutputReference</a>

---

##### `lastPeriodAmountInput`<sup>Optional</sup> <a name="lastPeriodAmountInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmountInput"></a>

```java
public java.lang.Object getLastPeriodAmountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `specifiedAmountInput`<sup>Optional</sup> <a name="specifiedAmountInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmountInput"></a>

```java
public BillingBudgetAmountSpecifiedAmount getSpecifiedAmountInput();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---

##### `lastPeriodAmount`<sup>Required</sup> <a name="lastPeriodAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmount"></a>

```java
public java.lang.Object getLastPeriodAmount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.internalValue"></a>

```java
public BillingBudgetAmount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---


### BillingBudgetAmountSpecifiedAmountOutputReference <a name="BillingBudgetAmountSpecifiedAmountOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetAmountSpecifiedAmountOutputReference;

new BillingBudgetAmountSpecifiedAmountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode">resetCurrencyCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetUnits">resetUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurrencyCode` <a name="resetCurrencyCode" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode"></a>

```java
public void resetCurrencyCode()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetUnits` <a name="resetUnits" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetUnits"></a>

```java
public void resetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput">currencyCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currencyCodeInput`<sup>Optional</sup> <a name="currencyCodeInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput"></a>

```java
public java.lang.String getCurrencyCodeInput();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput"></a>

```java
public java.lang.String getUnitsInput();
```

- *Type:* java.lang.String

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue"></a>

```java
public BillingBudgetAmountSpecifiedAmount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---


### BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference;

new BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue"></a>

```java
public BillingBudgetBudgetFilterCustomPeriodEndDate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---


### BillingBudgetBudgetFilterCustomPeriodOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetBudgetFilterCustomPeriodOutputReference;

new BillingBudgetBudgetFilterCustomPeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate">putEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate">putStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate">resetEndDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndDate` <a name="putEndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate"></a>

```java
public void putEndDate(BillingBudgetBudgetFilterCustomPeriodEndDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `putStartDate` <a name="putStartDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate"></a>

```java
public void putStartDate(BillingBudgetBudgetFilterCustomPeriodStartDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `resetEndDate` <a name="resetEndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate"></a>

```java
public void resetEndDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput">endDateInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput">startDateInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate"></a>

```java
public BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference getEndDate();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a>

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate"></a>

```java
public BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference getStartDate();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a>

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput"></a>

```java
public BillingBudgetBudgetFilterCustomPeriodEndDate getEndDateInput();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput"></a>

```java
public BillingBudgetBudgetFilterCustomPeriodStartDate getStartDateInput();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue"></a>

```java
public BillingBudgetBudgetFilterCustomPeriod getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---


### BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference;

new BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue"></a>

```java
public BillingBudgetBudgetFilterCustomPeriodStartDate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---


### BillingBudgetBudgetFilterOutputReference <a name="BillingBudgetBudgetFilterOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetBudgetFilterOutputReference;

new BillingBudgetBudgetFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod">putCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCalendarPeriod">resetCalendarPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypes">resetCreditTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment">resetCreditTypesTreatment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCustomPeriod">resetCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetProjects">resetProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetResourceAncestors">resetResourceAncestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetServices">resetServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetSubaccounts">resetSubaccounts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPeriod` <a name="putCustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod"></a>

```java
public void putCustomPeriod(BillingBudgetBudgetFilterCustomPeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---

##### `resetCalendarPeriod` <a name="resetCalendarPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCalendarPeriod"></a>

```java
public void resetCalendarPeriod()
```

##### `resetCreditTypes` <a name="resetCreditTypes" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypes"></a>

```java
public void resetCreditTypes()
```

##### `resetCreditTypesTreatment` <a name="resetCreditTypesTreatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment"></a>

```java
public void resetCreditTypesTreatment()
```

##### `resetCustomPeriod` <a name="resetCustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCustomPeriod"></a>

```java
public void resetCustomPeriod()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProjects` <a name="resetProjects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetProjects"></a>

```java
public void resetProjects()
```

##### `resetResourceAncestors` <a name="resetResourceAncestors" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetResourceAncestors"></a>

```java
public void resetResourceAncestors()
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetServices"></a>

```java
public void resetServices()
```

##### `resetSubaccounts` <a name="resetSubaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetSubaccounts"></a>

```java
public void resetSubaccounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriod">customPeriod</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference">BillingBudgetBudgetFilterCustomPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput">calendarPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesInput">creditTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput">creditTypesTreatmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriodInput">customPeriodInput</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projectsInput">projectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput">resourceAncestorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.servicesInput">servicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccountsInput">subaccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriod">calendarPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypes">creditTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment">creditTypesTreatment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projects">projects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestors">resourceAncestors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccounts">subaccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customPeriod`<sup>Required</sup> <a name="customPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriod"></a>

```java
public BillingBudgetBudgetFilterCustomPeriodOutputReference getCustomPeriod();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference">BillingBudgetBudgetFilterCustomPeriodOutputReference</a>

---

##### `calendarPeriodInput`<sup>Optional</sup> <a name="calendarPeriodInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput"></a>

```java
public java.lang.String getCalendarPeriodInput();
```

- *Type:* java.lang.String

---

##### `creditTypesInput`<sup>Optional</sup> <a name="creditTypesInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesInput"></a>

```java
public java.util.List<java.lang.String> getCreditTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `creditTypesTreatmentInput`<sup>Optional</sup> <a name="creditTypesTreatmentInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput"></a>

```java
public java.lang.String getCreditTypesTreatmentInput();
```

- *Type:* java.lang.String

---

##### `customPeriodInput`<sup>Optional</sup> <a name="customPeriodInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriodInput"></a>

```java
public BillingBudgetBudgetFilterCustomPeriod getCustomPeriodInput();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectsInput`<sup>Optional</sup> <a name="projectsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projectsInput"></a>

```java
public java.util.List<java.lang.String> getProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceAncestorsInput`<sup>Optional</sup> <a name="resourceAncestorsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput"></a>

```java
public java.util.List<java.lang.String> getResourceAncestorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.servicesInput"></a>

```java
public java.util.List<java.lang.String> getServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subaccountsInput`<sup>Optional</sup> <a name="subaccountsInput" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccountsInput"></a>

```java
public java.util.List<java.lang.String> getSubaccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `calendarPeriod`<sup>Required</sup> <a name="calendarPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriod"></a>

```java
public java.lang.String getCalendarPeriod();
```

- *Type:* java.lang.String

---

##### `creditTypes`<sup>Required</sup> <a name="creditTypes" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypes"></a>

```java
public java.util.List<java.lang.String> getCreditTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `creditTypesTreatment`<sup>Required</sup> <a name="creditTypesTreatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment"></a>

```java
public java.lang.String getCreditTypesTreatment();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projects"></a>

```java
public java.util.List<java.lang.String> getProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceAncestors`<sup>Required</sup> <a name="resourceAncestors" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestors"></a>

```java
public java.util.List<java.lang.String> getResourceAncestors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subaccounts`<sup>Required</sup> <a name="subaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccounts"></a>

```java
public java.util.List<java.lang.String> getSubaccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.internalValue"></a>

```java
public BillingBudgetBudgetFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---


### BillingBudgetThresholdRulesList <a name="BillingBudgetThresholdRulesList" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetThresholdRulesList;

new BillingBudgetThresholdRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get"></a>

```java
public BillingBudgetThresholdRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>>

---


### BillingBudgetThresholdRulesOutputReference <a name="BillingBudgetThresholdRulesOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetThresholdRulesOutputReference;

new BillingBudgetThresholdRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resetSpendBasis">resetSpendBasis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpendBasis` <a name="resetSpendBasis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resetSpendBasis"></a>

```java
public void resetSpendBasis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasisInput">spendBasisInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput">thresholdPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasis">spendBasis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercent">thresholdPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spendBasisInput`<sup>Optional</sup> <a name="spendBasisInput" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasisInput"></a>

```java
public java.lang.String getSpendBasisInput();
```

- *Type:* java.lang.String

---

##### `thresholdPercentInput`<sup>Optional</sup> <a name="thresholdPercentInput" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput"></a>

```java
public java.lang.Number getThresholdPercentInput();
```

- *Type:* java.lang.Number

---

##### `spendBasis`<sup>Required</sup> <a name="spendBasis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasis"></a>

```java
public java.lang.String getSpendBasis();
```

- *Type:* java.lang.String

---

##### `thresholdPercent`<sup>Required</sup> <a name="thresholdPercent" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercent"></a>

```java
public java.lang.Number getThresholdPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>

---


### BillingBudgetTimeoutsOutputReference <a name="BillingBudgetTimeoutsOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.billing_budget.BillingBudgetTimeoutsOutputReference;

new BillingBudgetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

---



