# `billingBudget` Submodule <a name="`billingBudget` Submodule" id="@cdktf/provider-google.billingBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingBudget <a name="BillingBudget" id="@cdktf/provider-google.billingBudget.BillingBudget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget google_billing_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudget(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  amount: BillingBudgetAmount,
  billing_account: str,
  all_updates_rule: BillingBudgetAllUpdatesRule = None,
  budget_filter: BillingBudgetBudgetFilter = None,
  display_name: str = None,
  id: str = None,
  ownership_scope: str = None,
  threshold_rules: typing.Union[IResolvable, typing.List[BillingBudgetThresholdRules]] = None,
  timeouts: BillingBudgetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.amount">amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | amount block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.billingAccount">billing_account</a></code> | <code>str</code> | ID of the billing account to set a budget on. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.allUpdatesRule">all_updates_rule</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | all_updates_rule block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.budgetFilter">budget_filter</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | budget_filter block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User data for display name in UI. Must be <= 60 chars. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#id BillingBudget#id}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.ownershipScope">ownership_scope</a></code> | <code>str</code> | The ownership scope of the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.thresholdRules">threshold_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>]]</code> | threshold_rules block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.amount"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#amount BillingBudget#amount}

---

##### `billing_account`<sup>Required</sup> <a name="billing_account" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.billingAccount"></a>

- *Type:* str

ID of the billing account to set a budget on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#billing_account BillingBudget#billing_account}

---

##### `all_updates_rule`<sup>Optional</sup> <a name="all_updates_rule" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.allUpdatesRule"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

all_updates_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#all_updates_rule BillingBudget#all_updates_rule}

---

##### `budget_filter`<sup>Optional</sup> <a name="budget_filter" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.budgetFilter"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

budget_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#budget_filter BillingBudget#budget_filter}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.displayName"></a>

- *Type:* str

User data for display name in UI. Must be <= 60 chars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#display_name BillingBudget#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#id BillingBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownership_scope`<sup>Optional</sup> <a name="ownership_scope" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.ownershipScope"></a>

- *Type:* str

The ownership scope of the budget.

The ownership scope and users'
IAM permissions determine who has full access to the budget's data. Possible values: ["OWNERSHIP_SCOPE_UNSPECIFIED", "ALL_USERS", "BILLING_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#ownership_scope BillingBudget#ownership_scope}

---

##### `threshold_rules`<sup>Optional</sup> <a name="threshold_rules" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.thresholdRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>]]

threshold_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#threshold_rules BillingBudget#threshold_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#timeouts BillingBudget#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule">put_all_updates_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putAmount">put_amount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter">put_budget_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules">put_threshold_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetAllUpdatesRule">reset_all_updates_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetBudgetFilter">reset_budget_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetOwnershipScope">reset_ownership_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetThresholdRules">reset_threshold_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.billingBudget.BillingBudget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.billingBudget.BillingBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.billingBudget.BillingBudget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.billingBudget.BillingBudget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.billingBudget.BillingBudget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.billingBudget.BillingBudget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.billingBudget.BillingBudget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.billingBudget.BillingBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.billingBudget.BillingBudget.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.billingBudget.BillingBudget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.billingBudget.BillingBudget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.billingBudget.BillingBudget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.billingBudget.BillingBudget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.billingBudget.BillingBudget.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.billingBudget.BillingBudget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_all_updates_rule` <a name="put_all_updates_rule" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule"></a>

```python
def put_all_updates_rule(
  disable_default_iam_recipients: typing.Union[bool, IResolvable] = None,
  enable_project_level_recipients: typing.Union[bool, IResolvable] = None,
  monitoring_notification_channels: typing.List[str] = None,
  pubsub_topic: str = None,
  schema_version: str = None
) -> None
```

###### `disable_default_iam_recipients`<sup>Optional</sup> <a name="disable_default_iam_recipients" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule.parameter.disableDefaultIamRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean.

When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#disable_default_iam_recipients BillingBudget#disable_default_iam_recipients}

---

###### `enable_project_level_recipients`<sup>Optional</sup> <a name="enable_project_level_recipients" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule.parameter.enableProjectLevelRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project.

This field will be ignored if the budget has multiple or no project configured.

Currently, project level recipients are the users with Owner role on a cloud project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#enable_project_level_recipients BillingBudget#enable_project_level_recipients}

---

###### `monitoring_notification_channels`<sup>Optional</sup> <a name="monitoring_notification_channels" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule.parameter.monitoringNotificationChannels"></a>

- *Type:* typing.List[str]

The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#monitoring_notification_channels BillingBudget#monitoring_notification_channels}

---

###### `pubsub_topic`<sup>Optional</sup> <a name="pubsub_topic" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule.parameter.pubsubTopic"></a>

- *Type:* str

The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}.

Updates are sent
at regular intervals to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#pubsub_topic BillingBudget#pubsub_topic}

---

###### `schema_version`<sup>Optional</sup> <a name="schema_version" id="@cdktf/provider-google.billingBudget.BillingBudget.putAllUpdatesRule.parameter.schemaVersion"></a>

- *Type:* str

The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#schema_version BillingBudget#schema_version}

---

##### `put_amount` <a name="put_amount" id="@cdktf/provider-google.billingBudget.BillingBudget.putAmount"></a>

```python
def put_amount(
  last_period_amount: typing.Union[bool, IResolvable] = None,
  specified_amount: BillingBudgetAmountSpecifiedAmount = None
) -> None
```

###### `last_period_amount`<sup>Optional</sup> <a name="last_period_amount" id="@cdktf/provider-google.billingBudget.BillingBudget.putAmount.parameter.lastPeriodAmount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configures a budget amount that is automatically set to 100% of last period's spend.

Boolean. Set value to true to use. Do not set to false, instead
use the 'specified_amount' block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#last_period_amount BillingBudget#last_period_amount}

---

###### `specified_amount`<sup>Optional</sup> <a name="specified_amount" id="@cdktf/provider-google.billingBudget.BillingBudget.putAmount.parameter.specifiedAmount"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

specified_amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#specified_amount BillingBudget#specified_amount}

---

##### `put_budget_filter` <a name="put_budget_filter" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter"></a>

```python
def put_budget_filter(
  calendar_period: str = None,
  credit_types: typing.List[str] = None,
  credit_types_treatment: str = None,
  custom_period: BillingBudgetBudgetFilterCustomPeriod = None,
  labels: typing.Mapping[str] = None,
  projects: typing.List[str] = None,
  resource_ancestors: typing.List[str] = None,
  services: typing.List[str] = None,
  subaccounts: typing.List[str] = None
) -> None
```

###### `calendar_period`<sup>Optional</sup> <a name="calendar_period" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter.parameter.calendarPeriod"></a>

- *Type:* str

A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start.

Grammatically, "the start of the current CalendarPeriod".
All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).

Exactly one of 'calendar_period', 'custom_period' must be provided. Possible values: ["MONTH", "QUARTER", "YEAR", "CALENDAR_PERIOD_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#calendar_period BillingBudget#calendar_period}

---

###### `credit_types`<sup>Optional</sup> <a name="credit_types" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter.parameter.creditTypes"></a>

- *Type:* typing.List[str]

Optional.

If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,
this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.
If creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#credit_types BillingBudget#credit_types}

---

###### `credit_types_treatment`<sup>Optional</sup> <a name="credit_types_treatment" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter.parameter.creditTypesTreatment"></a>

- *Type:* str

Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#credit_types_treatment BillingBudget#credit_types_treatment}

---

###### `custom_period`<sup>Optional</sup> <a name="custom_period" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter.parameter.customPeriod"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

custom_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#custom_period BillingBudget#custom_period}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#labels BillingBudget#labels}

---

###### `projects`<sup>Optional</sup> <a name="projects" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter.parameter.projects"></a>

- *Type:* typing.List[str]

A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget.

If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#projects BillingBudget#projects}

---

###### `resource_ancestors`<sup>Optional</sup> <a name="resource_ancestors" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter.parameter.resourceAncestors"></a>

- *Type:* typing.List[str]

A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget.

If omitted, the budget includes all usage that the billing account pays for. If the folder or organization
contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#resource_ancestors BillingBudget#resource_ancestors}

---

###### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter.parameter.services"></a>

- *Type:* typing.List[str]

A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget.

If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#services BillingBudget#services}

---

###### `subaccounts`<sup>Optional</sup> <a name="subaccounts" id="@cdktf/provider-google.billingBudget.BillingBudget.putBudgetFilter.parameter.subaccounts"></a>

- *Type:* typing.List[str]

A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget.

If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#subaccounts BillingBudget#subaccounts}

---

##### `put_threshold_rules` <a name="put_threshold_rules" id="@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules"></a>

```python
def put_threshold_rules(
  value: typing.Union[IResolvable, typing.List[BillingBudgetThresholdRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.billingBudget.BillingBudget.putThresholdRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#create BillingBudget#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#delete BillingBudget#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.billingBudget.BillingBudget.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#update BillingBudget#update}.

---

##### `reset_all_updates_rule` <a name="reset_all_updates_rule" id="@cdktf/provider-google.billingBudget.BillingBudget.resetAllUpdatesRule"></a>

```python
def reset_all_updates_rule() -> None
```

##### `reset_budget_filter` <a name="reset_budget_filter" id="@cdktf/provider-google.billingBudget.BillingBudget.resetBudgetFilter"></a>

```python
def reset_budget_filter() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.billingBudget.BillingBudget.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.billingBudget.BillingBudget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ownership_scope` <a name="reset_ownership_scope" id="@cdktf/provider-google.billingBudget.BillingBudget.resetOwnershipScope"></a>

```python
def reset_ownership_scope() -> None
```

##### `reset_threshold_rules` <a name="reset_threshold_rules" id="@cdktf/provider-google.billingBudget.BillingBudget.resetThresholdRules"></a>

```python
def reset_threshold_rules() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BillingBudget resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.billingBudget.BillingBudget.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudget.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.billingBudget.BillingBudget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BillingBudget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BillingBudget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BillingBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BillingBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRule">all_updates_rule</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference">BillingBudgetAllUpdatesRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.amount">amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference">BillingBudgetAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilter">budget_filter</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference">BillingBudgetBudgetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRules">threshold_rules</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList">BillingBudgetThresholdRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference">BillingBudgetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRuleInput">all_updates_rule_input</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.amountInput">amount_input</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccountInput">billing_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilterInput">budget_filter_input</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.ownershipScopeInput">ownership_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRulesInput">threshold_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccount">billing_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.ownershipScope">ownership_scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.billingBudget.BillingBudget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.billingBudget.BillingBudget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.billingBudget.BillingBudget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.billingBudget.BillingBudget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.billingBudget.BillingBudget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.billingBudget.BillingBudget.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.billingBudget.BillingBudget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.billingBudget.BillingBudget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.billingBudget.BillingBudget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.billingBudget.BillingBudget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `all_updates_rule`<sup>Required</sup> <a name="all_updates_rule" id="@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRule"></a>

```python
all_updates_rule: BillingBudgetAllUpdatesRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference">BillingBudgetAllUpdatesRuleOutputReference</a>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google.billingBudget.BillingBudget.property.amount"></a>

```python
amount: BillingBudgetAmountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference">BillingBudgetAmountOutputReference</a>

---

##### `budget_filter`<sup>Required</sup> <a name="budget_filter" id="@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilter"></a>

```python
budget_filter: BillingBudgetBudgetFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference">BillingBudgetBudgetFilterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.billingBudget.BillingBudget.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `threshold_rules`<sup>Required</sup> <a name="threshold_rules" id="@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRules"></a>

```python
threshold_rules: BillingBudgetThresholdRulesList
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList">BillingBudgetThresholdRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.billingBudget.BillingBudget.property.timeouts"></a>

```python
timeouts: BillingBudgetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference">BillingBudgetTimeoutsOutputReference</a>

---

##### `all_updates_rule_input`<sup>Optional</sup> <a name="all_updates_rule_input" id="@cdktf/provider-google.billingBudget.BillingBudget.property.allUpdatesRuleInput"></a>

```python
all_updates_rule_input: BillingBudgetAllUpdatesRule
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktf/provider-google.billingBudget.BillingBudget.property.amountInput"></a>

```python
amount_input: BillingBudgetAmount
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---

##### `billing_account_input`<sup>Optional</sup> <a name="billing_account_input" id="@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccountInput"></a>

```python
billing_account_input: str
```

- *Type:* str

---

##### `budget_filter_input`<sup>Optional</sup> <a name="budget_filter_input" id="@cdktf/provider-google.billingBudget.BillingBudget.property.budgetFilterInput"></a>

```python
budget_filter_input: BillingBudgetBudgetFilter
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.billingBudget.BillingBudget.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.billingBudget.BillingBudget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ownership_scope_input`<sup>Optional</sup> <a name="ownership_scope_input" id="@cdktf/provider-google.billingBudget.BillingBudget.property.ownershipScopeInput"></a>

```python
ownership_scope_input: str
```

- *Type:* str

---

##### `threshold_rules_input`<sup>Optional</sup> <a name="threshold_rules_input" id="@cdktf/provider-google.billingBudget.BillingBudget.property.thresholdRulesInput"></a>

```python
threshold_rules_input: typing.Union[IResolvable, typing.List[BillingBudgetThresholdRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.billingBudget.BillingBudget.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BillingBudgetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>]

---

##### `billing_account`<sup>Required</sup> <a name="billing_account" id="@cdktf/provider-google.billingBudget.BillingBudget.property.billingAccount"></a>

```python
billing_account: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.billingBudget.BillingBudget.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ownership_scope`<sup>Required</sup> <a name="ownership_scope" id="@cdktf/provider-google.billingBudget.BillingBudget.property.ownershipScope"></a>

```python
ownership_scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.billingBudget.BillingBudget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BillingBudgetAllUpdatesRule <a name="BillingBudgetAllUpdatesRule" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetAllUpdatesRule(
  disable_default_iam_recipients: typing.Union[bool, IResolvable] = None,
  enable_project_level_recipients: typing.Union[bool, IResolvable] = None,
  monitoring_notification_channels: typing.List[str] = None,
  pubsub_topic: str = None,
  schema_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients">disable_default_iam_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.enableProjectLevelRecipients">enable_project_level_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.monitoringNotificationChannels">monitoring_notification_channels</a></code> | <code>typing.List[str]</code> | The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.schemaVersion">schema_version</a></code> | <code>str</code> | The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format. |

---

##### `disable_default_iam_recipients`<sup>Optional</sup> <a name="disable_default_iam_recipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients"></a>

```python
disable_default_iam_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean.

When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#disable_default_iam_recipients BillingBudget#disable_default_iam_recipients}

---

##### `enable_project_level_recipients`<sup>Optional</sup> <a name="enable_project_level_recipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.enableProjectLevelRecipients"></a>

```python
enable_project_level_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project.

This field will be ignored if the budget has multiple or no project configured.

Currently, project level recipients are the users with Owner role on a cloud project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#enable_project_level_recipients BillingBudget#enable_project_level_recipients}

---

##### `monitoring_notification_channels`<sup>Optional</sup> <a name="monitoring_notification_channels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.monitoringNotificationChannels"></a>

```python
monitoring_notification_channels: typing.List[str]
```

- *Type:* typing.List[str]

The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#monitoring_notification_channels BillingBudget#monitoring_notification_channels}

---

##### `pubsub_topic`<sup>Optional</sup> <a name="pubsub_topic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}.

Updates are sent
at regular intervals to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#pubsub_topic BillingBudget#pubsub_topic}

---

##### `schema_version`<sup>Optional</sup> <a name="schema_version" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule.property.schemaVersion"></a>

```python
schema_version: str
```

- *Type:* str

The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#schema_version BillingBudget#schema_version}

---

### BillingBudgetAmount <a name="BillingBudgetAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetAmount(
  last_period_amount: typing.Union[bool, IResolvable] = None,
  specified_amount: BillingBudgetAmountSpecifiedAmount = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.lastPeriodAmount">last_period_amount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Configures a budget amount that is automatically set to 100% of last period's spend. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.specifiedAmount">specified_amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | specified_amount block. |

---

##### `last_period_amount`<sup>Optional</sup> <a name="last_period_amount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.lastPeriodAmount"></a>

```python
last_period_amount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configures a budget amount that is automatically set to 100% of last period's spend.

Boolean. Set value to true to use. Do not set to false, instead
use the 'specified_amount' block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#last_period_amount BillingBudget#last_period_amount}

---

##### `specified_amount`<sup>Optional</sup> <a name="specified_amount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmount.property.specifiedAmount"></a>

```python
specified_amount: BillingBudgetAmountSpecifiedAmount
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

specified_amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#specified_amount BillingBudget#specified_amount}

---

### BillingBudgetAmountSpecifiedAmount <a name="BillingBudgetAmountSpecifiedAmount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetAmountSpecifiedAmount(
  currency_code: str = None,
  nanos: typing.Union[int, float] = None,
  units: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.currencyCode">currency_code</a></code> | <code>str</code> | The 3-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Number of nano (10^-9) units of the amount. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.units">units</a></code> | <code>str</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `currency_code`<sup>Optional</sup> <a name="currency_code" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

The 3-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#currency_code BillingBudget#currency_code}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of nano (10^-9) units of the amount.

The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#nanos BillingBudget#nanos}

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount.property.units"></a>

```python
units: str
```

- *Type:* str

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#units BillingBudget#units}

---

### BillingBudgetBudgetFilter <a name="BillingBudgetBudgetFilter" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetBudgetFilter(
  calendar_period: str = None,
  credit_types: typing.List[str] = None,
  credit_types_treatment: str = None,
  custom_period: BillingBudgetBudgetFilterCustomPeriod = None,
  labels: typing.Mapping[str] = None,
  projects: typing.List[str] = None,
  resource_ancestors: typing.List[str] = None,
  services: typing.List[str] = None,
  subaccounts: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.calendarPeriod">calendar_period</a></code> | <code>str</code> | A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypes">credit_types</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypesTreatment">credit_types_treatment</a></code> | <code>str</code> | Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"]. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.customPeriod">custom_period</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | custom_period block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.projects">projects</a></code> | <code>typing.List[str]</code> | A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.resourceAncestors">resource_ancestors</a></code> | <code>typing.List[str]</code> | A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.services">services</a></code> | <code>typing.List[str]</code> | A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.subaccounts">subaccounts</a></code> | <code>typing.List[str]</code> | A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget. |

---

##### `calendar_period`<sup>Optional</sup> <a name="calendar_period" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.calendarPeriod"></a>

```python
calendar_period: str
```

- *Type:* str

A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start.

Grammatically, "the start of the current CalendarPeriod".
All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).

Exactly one of 'calendar_period', 'custom_period' must be provided. Possible values: ["MONTH", "QUARTER", "YEAR", "CALENDAR_PERIOD_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#calendar_period BillingBudget#calendar_period}

---

##### `credit_types`<sup>Optional</sup> <a name="credit_types" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypes"></a>

```python
credit_types: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,
this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.
If creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#credit_types BillingBudget#credit_types}

---

##### `credit_types_treatment`<sup>Optional</sup> <a name="credit_types_treatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.creditTypesTreatment"></a>

```python
credit_types_treatment: str
```

- *Type:* str

Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#credit_types_treatment BillingBudget#credit_types_treatment}

---

##### `custom_period`<sup>Optional</sup> <a name="custom_period" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.customPeriod"></a>

```python
custom_period: BillingBudgetBudgetFilterCustomPeriod
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

custom_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#custom_period BillingBudget#custom_period}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#labels BillingBudget#labels}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.projects"></a>

```python
projects: typing.List[str]
```

- *Type:* typing.List[str]

A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget.

If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#projects BillingBudget#projects}

---

##### `resource_ancestors`<sup>Optional</sup> <a name="resource_ancestors" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.resourceAncestors"></a>

```python
resource_ancestors: typing.List[str]
```

- *Type:* typing.List[str]

A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget.

If omitted, the budget includes all usage that the billing account pays for. If the folder or organization
contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#resource_ancestors BillingBudget#resource_ancestors}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget.

If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#services BillingBudget#services}

---

##### `subaccounts`<sup>Optional</sup> <a name="subaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter.property.subaccounts"></a>

```python
subaccounts: typing.List[str]
```

- *Type:* typing.List[str]

A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget.

If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an emtpy array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#subaccounts BillingBudget#subaccounts}

---

### BillingBudgetBudgetFilterCustomPeriod <a name="BillingBudgetBudgetFilterCustomPeriod" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetBudgetFilterCustomPeriod(
  start_date: BillingBudgetBudgetFilterCustomPeriodStartDate,
  end_date: BillingBudgetBudgetFilterCustomPeriodEndDate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.startDate">start_date</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.endDate">end_date</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | end_date block. |

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.startDate"></a>

```python
start_date: BillingBudgetBudgetFilterCustomPeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#start_date BillingBudget#start_date}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod.property.endDate"></a>

```python
end_date: BillingBudgetBudgetFilterCustomPeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#end_date BillingBudget#end_date}

---

### BillingBudgetBudgetFilterCustomPeriodEndDate <a name="BillingBudgetBudgetFilterCustomPeriodEndDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#day BillingBudget#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#month BillingBudget#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#year BillingBudget#year}

---

### BillingBudgetBudgetFilterCustomPeriodStartDate <a name="BillingBudgetBudgetFilterCustomPeriodStartDate" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#day BillingBudget#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#month BillingBudget#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#year BillingBudget#year}

---

### BillingBudgetConfig <a name="BillingBudgetConfig" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  amount: BillingBudgetAmount,
  billing_account: str,
  all_updates_rule: BillingBudgetAllUpdatesRule = None,
  budget_filter: BillingBudgetBudgetFilter = None,
  display_name: str = None,
  id: str = None,
  ownership_scope: str = None,
  threshold_rules: typing.Union[IResolvable, typing.List[BillingBudgetThresholdRules]] = None,
  timeouts: BillingBudgetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.amount">amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | amount block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.billingAccount">billing_account</a></code> | <code>str</code> | ID of the billing account to set a budget on. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.allUpdatesRule">all_updates_rule</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | all_updates_rule block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.budgetFilter">budget_filter</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | budget_filter block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.displayName">display_name</a></code> | <code>str</code> | User data for display name in UI. Must be <= 60 chars. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#id BillingBudget#id}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.ownershipScope">ownership_scope</a></code> | <code>str</code> | The ownership scope of the budget. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.thresholdRules">threshold_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>]]</code> | threshold_rules block. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.amount"></a>

```python
amount: BillingBudgetAmount
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#amount BillingBudget#amount}

---

##### `billing_account`<sup>Required</sup> <a name="billing_account" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.billingAccount"></a>

```python
billing_account: str
```

- *Type:* str

ID of the billing account to set a budget on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#billing_account BillingBudget#billing_account}

---

##### `all_updates_rule`<sup>Optional</sup> <a name="all_updates_rule" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.allUpdatesRule"></a>

```python
all_updates_rule: BillingBudgetAllUpdatesRule
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

all_updates_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#all_updates_rule BillingBudget#all_updates_rule}

---

##### `budget_filter`<sup>Optional</sup> <a name="budget_filter" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.budgetFilter"></a>

```python
budget_filter: BillingBudgetBudgetFilter
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

budget_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#budget_filter BillingBudget#budget_filter}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User data for display name in UI. Must be <= 60 chars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#display_name BillingBudget#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#id BillingBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownership_scope`<sup>Optional</sup> <a name="ownership_scope" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.ownershipScope"></a>

```python
ownership_scope: str
```

- *Type:* str

The ownership scope of the budget.

The ownership scope and users'
IAM permissions determine who has full access to the budget's data. Possible values: ["OWNERSHIP_SCOPE_UNSPECIFIED", "ALL_USERS", "BILLING_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#ownership_scope BillingBudget#ownership_scope}

---

##### `threshold_rules`<sup>Optional</sup> <a name="threshold_rules" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.thresholdRules"></a>

```python
threshold_rules: typing.Union[IResolvable, typing.List[BillingBudgetThresholdRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>]]

threshold_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#threshold_rules BillingBudget#threshold_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.billingBudget.BillingBudgetConfig.property.timeouts"></a>

```python
timeouts: BillingBudgetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#timeouts BillingBudget#timeouts}

---

### BillingBudgetThresholdRules <a name="BillingBudgetThresholdRules" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetThresholdRules(
  threshold_percent: typing.Union[int, float],
  spend_basis: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.thresholdPercent">threshold_percent</a></code> | <code>typing.Union[int, float]</code> | Send an alert when this threshold is exceeded. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.spendBasis">spend_basis</a></code> | <code>str</code> | The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"]. |

---

##### `threshold_percent`<sup>Required</sup> <a name="threshold_percent" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.thresholdPercent"></a>

```python
threshold_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Send an alert when this threshold is exceeded.

This is a
1.0-based percentage, so 0.5 = 50%. Must be >= 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#threshold_percent BillingBudget#threshold_percent}

---

##### `spend_basis`<sup>Optional</sup> <a name="spend_basis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules.property.spendBasis"></a>

```python
spend_basis: str
```

- *Type:* str

The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#spend_basis BillingBudget#spend_basis}

---

### BillingBudgetTimeouts <a name="BillingBudgetTimeouts" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#create BillingBudget#create}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#delete BillingBudget#delete}. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#update BillingBudget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#create BillingBudget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#delete BillingBudget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#update BillingBudget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingBudgetAllUpdatesRuleOutputReference <a name="BillingBudgetAllUpdatesRuleOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetAllUpdatesRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients">reset_disable_default_iam_recipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetEnableProjectLevelRecipients">reset_enable_project_level_recipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels">reset_monitoring_notification_channels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic">reset_pubsub_topic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion">reset_schema_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_default_iam_recipients` <a name="reset_disable_default_iam_recipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients"></a>

```python
def reset_disable_default_iam_recipients() -> None
```

##### `reset_enable_project_level_recipients` <a name="reset_enable_project_level_recipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetEnableProjectLevelRecipients"></a>

```python
def reset_enable_project_level_recipients() -> None
```

##### `reset_monitoring_notification_channels` <a name="reset_monitoring_notification_channels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels"></a>

```python
def reset_monitoring_notification_channels() -> None
```

##### `reset_pubsub_topic` <a name="reset_pubsub_topic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic"></a>

```python
def reset_pubsub_topic() -> None
```

##### `reset_schema_version` <a name="reset_schema_version" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion"></a>

```python
def reset_schema_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput">disable_default_iam_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipientsInput">enable_project_level_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput">monitoring_notification_channels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput">schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients">disable_default_iam_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipients">enable_project_level_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels">monitoring_notification_channels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion">schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_default_iam_recipients_input`<sup>Optional</sup> <a name="disable_default_iam_recipients_input" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput"></a>

```python
disable_default_iam_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_project_level_recipients_input`<sup>Optional</sup> <a name="enable_project_level_recipients_input" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipientsInput"></a>

```python
enable_project_level_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monitoring_notification_channels_input`<sup>Optional</sup> <a name="monitoring_notification_channels_input" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput"></a>

```python
monitoring_notification_channels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `schema_version_input`<sup>Optional</sup> <a name="schema_version_input" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput"></a>

```python
schema_version_input: str
```

- *Type:* str

---

##### `disable_default_iam_recipients`<sup>Required</sup> <a name="disable_default_iam_recipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients"></a>

```python
disable_default_iam_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_project_level_recipients`<sup>Required</sup> <a name="enable_project_level_recipients" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipients"></a>

```python
enable_project_level_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monitoring_notification_channels`<sup>Required</sup> <a name="monitoring_notification_channels" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels"></a>

```python
monitoring_notification_channels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

##### `schema_version`<sup>Required</sup> <a name="schema_version" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion"></a>

```python
schema_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRuleOutputReference.property.internalValue"></a>

```python
internal_value: BillingBudgetAllUpdatesRule
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAllUpdatesRule">BillingBudgetAllUpdatesRule</a>

---


### BillingBudgetAmountOutputReference <a name="BillingBudgetAmountOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetAmountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount">put_specified_amount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetLastPeriodAmount">reset_last_period_amount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetSpecifiedAmount">reset_specified_amount</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_specified_amount` <a name="put_specified_amount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount"></a>

```python
def put_specified_amount(
  currency_code: str = None,
  nanos: typing.Union[int, float] = None,
  units: str = None
) -> None
```

###### `currency_code`<sup>Optional</sup> <a name="currency_code" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount.parameter.currencyCode"></a>

- *Type:* str

The 3-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#currency_code BillingBudget#currency_code}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Number of nano (10^-9) units of the amount.

The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#nanos BillingBudget#nanos}

---

###### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.putSpecifiedAmount.parameter.units"></a>

- *Type:* str

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#units BillingBudget#units}

---

##### `reset_last_period_amount` <a name="reset_last_period_amount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetLastPeriodAmount"></a>

```python
def reset_last_period_amount() -> None
```

##### `reset_specified_amount` <a name="reset_specified_amount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.resetSpecifiedAmount"></a>

```python
def reset_specified_amount() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmount">specified_amount</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference">BillingBudgetAmountSpecifiedAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmountInput">last_period_amount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmountInput">specified_amount_input</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmount">last_period_amount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `specified_amount`<sup>Required</sup> <a name="specified_amount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmount"></a>

```python
specified_amount: BillingBudgetAmountSpecifiedAmountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference">BillingBudgetAmountSpecifiedAmountOutputReference</a>

---

##### `last_period_amount_input`<sup>Optional</sup> <a name="last_period_amount_input" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmountInput"></a>

```python
last_period_amount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `specified_amount_input`<sup>Optional</sup> <a name="specified_amount_input" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.specifiedAmountInput"></a>

```python
specified_amount_input: BillingBudgetAmountSpecifiedAmount
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---

##### `last_period_amount`<sup>Required</sup> <a name="last_period_amount" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.lastPeriodAmount"></a>

```python
last_period_amount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountOutputReference.property.internalValue"></a>

```python
internal_value: BillingBudgetAmount
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmount">BillingBudgetAmount</a>

---


### BillingBudgetAmountSpecifiedAmountOutputReference <a name="BillingBudgetAmountSpecifiedAmountOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode">reset_currency_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetUnits">reset_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_currency_code` <a name="reset_currency_code" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode"></a>

```python
def reset_currency_code() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_units` <a name="reset_units" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.resetUnits"></a>

```python
def reset_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput">currency_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput">units_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency_code_input`<sup>Optional</sup> <a name="currency_code_input" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput"></a>

```python
currency_code_input: str
```

- *Type:* str

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units_input`<sup>Optional</sup> <a name="units_input" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput"></a>

```python
units_input: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue"></a>

```python
internal_value: BillingBudgetAmountSpecifiedAmount
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetAmountSpecifiedAmount">BillingBudgetAmountSpecifiedAmount</a>

---


### BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue"></a>

```python
internal_value: BillingBudgetBudgetFilterCustomPeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---


### BillingBudgetBudgetFilterCustomPeriodOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate">put_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate">put_start_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate">reset_end_date</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_end_date` <a name="put_end_date" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate"></a>

```python
def put_end_date(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
) -> None
```

###### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#day BillingBudget#day}

---

###### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#month BillingBudget#month}

---

###### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#year BillingBudget#year}

---

##### `put_start_date` <a name="put_start_date" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate"></a>

```python
def put_start_date(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
) -> None
```

###### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#day BillingBudget#day}

---

###### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#month BillingBudget#month}

---

###### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#year BillingBudget#year}

---

##### `reset_end_date` <a name="reset_end_date" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate"></a>

```python
def reset_end_date() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate">end_date</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate">start_date</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput">end_date_input</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput">start_date_input</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate"></a>

```python
end_date: BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">BillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a>

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate"></a>

```python
start_date: BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a>

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput"></a>

```python
end_date_input: BillingBudgetBudgetFilterCustomPeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput"></a>

```python
start_date_input: BillingBudgetBudgetFilterCustomPeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue"></a>

```python
internal_value: BillingBudgetBudgetFilterCustomPeriod
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---


### BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference <a name="BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue"></a>

```python
internal_value: BillingBudgetBudgetFilterCustomPeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

---


### BillingBudgetBudgetFilterOutputReference <a name="BillingBudgetBudgetFilterOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetBudgetFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod">put_custom_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCalendarPeriod">reset_calendar_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypes">reset_credit_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment">reset_credit_types_treatment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCustomPeriod">reset_custom_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetProjects">reset_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetResourceAncestors">reset_resource_ancestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetServices">reset_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetSubaccounts">reset_subaccounts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_period` <a name="put_custom_period" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod"></a>

```python
def put_custom_period(
  start_date: BillingBudgetBudgetFilterCustomPeriodStartDate,
  end_date: BillingBudgetBudgetFilterCustomPeriodEndDate = None
) -> None
```

###### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod.parameter.startDate"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodStartDate">BillingBudgetBudgetFilterCustomPeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#start_date BillingBudget#start_date}

---

###### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.putCustomPeriod.parameter.endDate"></a>

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodEndDate">BillingBudgetBudgetFilterCustomPeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/billing_budget#end_date BillingBudget#end_date}

---

##### `reset_calendar_period` <a name="reset_calendar_period" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCalendarPeriod"></a>

```python
def reset_calendar_period() -> None
```

##### `reset_credit_types` <a name="reset_credit_types" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypes"></a>

```python
def reset_credit_types() -> None
```

##### `reset_credit_types_treatment` <a name="reset_credit_types_treatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment"></a>

```python
def reset_credit_types_treatment() -> None
```

##### `reset_custom_period` <a name="reset_custom_period" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetCustomPeriod"></a>

```python
def reset_custom_period() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_projects` <a name="reset_projects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetProjects"></a>

```python
def reset_projects() -> None
```

##### `reset_resource_ancestors` <a name="reset_resource_ancestors" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetResourceAncestors"></a>

```python
def reset_resource_ancestors() -> None
```

##### `reset_services` <a name="reset_services" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetServices"></a>

```python
def reset_services() -> None
```

##### `reset_subaccounts` <a name="reset_subaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.resetSubaccounts"></a>

```python
def reset_subaccounts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriod">custom_period</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference">BillingBudgetBudgetFilterCustomPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput">calendar_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesInput">credit_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput">credit_types_treatment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriodInput">custom_period_input</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projectsInput">projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput">resource_ancestors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.servicesInput">services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccountsInput">subaccounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriod">calendar_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypes">credit_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment">credit_types_treatment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projects">projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestors">resource_ancestors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccounts">subaccounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_period`<sup>Required</sup> <a name="custom_period" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriod"></a>

```python
custom_period: BillingBudgetBudgetFilterCustomPeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriodOutputReference">BillingBudgetBudgetFilterCustomPeriodOutputReference</a>

---

##### `calendar_period_input`<sup>Optional</sup> <a name="calendar_period_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput"></a>

```python
calendar_period_input: str
```

- *Type:* str

---

##### `credit_types_input`<sup>Optional</sup> <a name="credit_types_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesInput"></a>

```python
credit_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credit_types_treatment_input`<sup>Optional</sup> <a name="credit_types_treatment_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput"></a>

```python
credit_types_treatment_input: str
```

- *Type:* str

---

##### `custom_period_input`<sup>Optional</sup> <a name="custom_period_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.customPeriodInput"></a>

```python
custom_period_input: BillingBudgetBudgetFilterCustomPeriod
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterCustomPeriod">BillingBudgetBudgetFilterCustomPeriod</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `projects_input`<sup>Optional</sup> <a name="projects_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projectsInput"></a>

```python
projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_ancestors_input`<sup>Optional</sup> <a name="resource_ancestors_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput"></a>

```python
resource_ancestors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services_input`<sup>Optional</sup> <a name="services_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.servicesInput"></a>

```python
services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subaccounts_input`<sup>Optional</sup> <a name="subaccounts_input" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccountsInput"></a>

```python
subaccounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `calendar_period`<sup>Required</sup> <a name="calendar_period" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.calendarPeriod"></a>

```python
calendar_period: str
```

- *Type:* str

---

##### `credit_types`<sup>Required</sup> <a name="credit_types" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypes"></a>

```python
credit_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credit_types_treatment`<sup>Required</sup> <a name="credit_types_treatment" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment"></a>

```python
credit_types_treatment: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.projects"></a>

```python
projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_ancestors`<sup>Required</sup> <a name="resource_ancestors" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.resourceAncestors"></a>

```python
resource_ancestors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subaccounts`<sup>Required</sup> <a name="subaccounts" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.subaccounts"></a>

```python
subaccounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilterOutputReference.property.internalValue"></a>

```python
internal_value: BillingBudgetBudgetFilter
```

- *Type:* <a href="#@cdktf/provider-google.billingBudget.BillingBudgetBudgetFilter">BillingBudgetBudgetFilter</a>

---


### BillingBudgetThresholdRulesList <a name="BillingBudgetThresholdRulesList" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetThresholdRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BillingBudgetThresholdRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BillingBudgetThresholdRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>]]

---


### BillingBudgetThresholdRulesOutputReference <a name="BillingBudgetThresholdRulesOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetThresholdRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resetSpendBasis">reset_spend_basis</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_spend_basis` <a name="reset_spend_basis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.resetSpendBasis"></a>

```python
def reset_spend_basis() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasisInput">spend_basis_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput">threshold_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasis">spend_basis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercent">threshold_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `spend_basis_input`<sup>Optional</sup> <a name="spend_basis_input" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasisInput"></a>

```python
spend_basis_input: str
```

- *Type:* str

---

##### `threshold_percent_input`<sup>Optional</sup> <a name="threshold_percent_input" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput"></a>

```python
threshold_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spend_basis`<sup>Required</sup> <a name="spend_basis" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.spendBasis"></a>

```python
spend_basis: str
```

- *Type:* str

---

##### `threshold_percent`<sup>Required</sup> <a name="threshold_percent" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.thresholdPercent"></a>

```python
threshold_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.billingBudget.BillingBudgetThresholdRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BillingBudgetThresholdRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.billingBudget.BillingBudgetThresholdRules">BillingBudgetThresholdRules</a>]

---


### BillingBudgetTimeoutsOutputReference <a name="BillingBudgetTimeoutsOutputReference" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import billing_budget

billingBudget.BillingBudgetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.billingBudget.BillingBudgetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BillingBudgetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.billingBudget.BillingBudgetTimeouts">BillingBudgetTimeouts</a>]

---



