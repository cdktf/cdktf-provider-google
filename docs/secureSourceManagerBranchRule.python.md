# `secureSourceManagerBranchRule` Submodule <a name="`secureSourceManagerBranchRule` Submodule" id="@cdktf/provider-google.secureSourceManagerBranchRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureSourceManagerBranchRule <a name="SecureSourceManagerBranchRule" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule google_secure_source_manager_branch_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secure_source_manager_branch_rule

secureSourceManagerBranchRule.SecureSourceManagerBranchRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  branch_rule_id: str,
  include_pattern: str,
  location: str,
  repository_id: str,
  allow_stale_reviews: typing.Union[bool, IResolvable] = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  minimum_approvals_count: typing.Union[int, float] = None,
  minimum_reviews_count: typing.Union[int, float] = None,
  project: str = None,
  require_comments_resolved: typing.Union[bool, IResolvable] = None,
  require_linear_history: typing.Union[bool, IResolvable] = None,
  require_pull_request: typing.Union[bool, IResolvable] = None,
  timeouts: SecureSourceManagerBranchRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.branchRuleId">branch_rule_id</a></code> | <code>str</code> | The ID for the BranchRule. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.includePattern">include_pattern</a></code> | <code>str</code> | The BranchRule matches branches based on the specified regular expression. Use .* to match all branches. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | The ID for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.allowStaleReviews">allow_stale_reviews</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if allow stale reviews or approvals before merging to the branch. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the branch rule is disabled or not. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#id SecureSourceManagerBranchRule#id}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.minimumApprovalsCount">minimum_approvals_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of approvals required for the branch rule to be matched. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.minimumReviewsCount">minimum_reviews_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of reviews required for the branch rule to be matched. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#project SecureSourceManagerBranchRule#project}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.requireCommentsResolved">require_comments_resolved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if require comments resolved before merging to the branch. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.requireLinearHistory">require_linear_history</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if require linear history before merging to the branch. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.requirePullRequest">require_pull_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the branch rule requires a pull request or not. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `branch_rule_id`<sup>Required</sup> <a name="branch_rule_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.branchRuleId"></a>

- *Type:* str

The ID for the BranchRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#branch_rule_id SecureSourceManagerBranchRule#branch_rule_id}

---

##### `include_pattern`<sup>Required</sup> <a name="include_pattern" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.includePattern"></a>

- *Type:* str

The BranchRule matches branches based on the specified regular expression. Use .* to match all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#include_pattern SecureSourceManagerBranchRule#include_pattern}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.location"></a>

- *Type:* str

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#location SecureSourceManagerBranchRule#location}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.repositoryId"></a>

- *Type:* str

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#repository_id SecureSourceManagerBranchRule#repository_id}

---

##### `allow_stale_reviews`<sup>Optional</sup> <a name="allow_stale_reviews" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.allowStaleReviews"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if allow stale reviews or approvals before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#allow_stale_reviews SecureSourceManagerBranchRule#allow_stale_reviews}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the branch rule is disabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#disabled SecureSourceManagerBranchRule#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#id SecureSourceManagerBranchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimum_approvals_count`<sup>Optional</sup> <a name="minimum_approvals_count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.minimumApprovalsCount"></a>

- *Type:* typing.Union[int, float]

The minimum number of approvals required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#minimum_approvals_count SecureSourceManagerBranchRule#minimum_approvals_count}

---

##### `minimum_reviews_count`<sup>Optional</sup> <a name="minimum_reviews_count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.minimumReviewsCount"></a>

- *Type:* typing.Union[int, float]

The minimum number of reviews required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#minimum_reviews_count SecureSourceManagerBranchRule#minimum_reviews_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#project SecureSourceManagerBranchRule#project}.

---

##### `require_comments_resolved`<sup>Optional</sup> <a name="require_comments_resolved" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.requireCommentsResolved"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if require comments resolved before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#require_comments_resolved SecureSourceManagerBranchRule#require_comments_resolved}

---

##### `require_linear_history`<sup>Optional</sup> <a name="require_linear_history" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.requireLinearHistory"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if require linear history before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#require_linear_history SecureSourceManagerBranchRule#require_linear_history}

---

##### `require_pull_request`<sup>Optional</sup> <a name="require_pull_request" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.requirePullRequest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the branch rule requires a pull request or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#require_pull_request SecureSourceManagerBranchRule#require_pull_request}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#timeouts SecureSourceManagerBranchRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetAllowStaleReviews">reset_allow_stale_reviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumApprovalsCount">reset_minimum_approvals_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumReviewsCount">reset_minimum_reviews_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireCommentsResolved">reset_require_comments_resolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireLinearHistory">reset_require_linear_history</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequirePullRequest">reset_require_pull_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#create SecureSourceManagerBranchRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#delete SecureSourceManagerBranchRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#update SecureSourceManagerBranchRule#update}.

---

##### `reset_allow_stale_reviews` <a name="reset_allow_stale_reviews" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetAllowStaleReviews"></a>

```python
def reset_allow_stale_reviews() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_minimum_approvals_count` <a name="reset_minimum_approvals_count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumApprovalsCount"></a>

```python
def reset_minimum_approvals_count() -> None
```

##### `reset_minimum_reviews_count` <a name="reset_minimum_reviews_count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumReviewsCount"></a>

```python
def reset_minimum_reviews_count() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_require_comments_resolved` <a name="reset_require_comments_resolved" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireCommentsResolved"></a>

```python
def reset_require_comments_resolved() -> None
```

##### `reset_require_linear_history` <a name="reset_require_linear_history" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireLinearHistory"></a>

```python
def reset_require_linear_history() -> None
```

##### `reset_require_pull_request` <a name="reset_require_pull_request" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequirePullRequest"></a>

```python
def reset_require_pull_request() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecureSourceManagerBranchRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import secure_source_manager_branch_rule

secureSourceManagerBranchRule.SecureSourceManagerBranchRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import secure_source_manager_branch_rule

secureSourceManagerBranchRule.SecureSourceManagerBranchRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import secure_source_manager_branch_rule

secureSourceManagerBranchRule.SecureSourceManagerBranchRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import secure_source_manager_branch_rule

secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecureSourceManagerBranchRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecureSourceManagerBranchRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecureSourceManagerBranchRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecureSourceManagerBranchRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference">SecureSourceManagerBranchRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviewsInput">allow_stale_reviews_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleIdInput">branch_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePatternInput">include_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCountInput">minimum_approvals_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCountInput">minimum_reviews_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolvedInput">require_comments_resolved_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistoryInput">require_linear_history_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequestInput">require_pull_request_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviews">allow_stale_reviews</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleId">branch_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePattern">include_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCount">minimum_approvals_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCount">minimum_reviews_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolved">require_comments_resolved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistory">require_linear_history</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequest">require_pull_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeouts"></a>

```python
timeouts: SecureSourceManagerBranchRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference">SecureSourceManagerBranchRuleTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `allow_stale_reviews_input`<sup>Optional</sup> <a name="allow_stale_reviews_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviewsInput"></a>

```python
allow_stale_reviews_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `branch_rule_id_input`<sup>Optional</sup> <a name="branch_rule_id_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleIdInput"></a>

```python
branch_rule_id_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_pattern_input`<sup>Optional</sup> <a name="include_pattern_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePatternInput"></a>

```python
include_pattern_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `minimum_approvals_count_input`<sup>Optional</sup> <a name="minimum_approvals_count_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCountInput"></a>

```python
minimum_approvals_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_reviews_count_input`<sup>Optional</sup> <a name="minimum_reviews_count_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCountInput"></a>

```python
minimum_reviews_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `require_comments_resolved_input`<sup>Optional</sup> <a name="require_comments_resolved_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolvedInput"></a>

```python
require_comments_resolved_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_linear_history_input`<sup>Optional</sup> <a name="require_linear_history_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistoryInput"></a>

```python
require_linear_history_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_pull_request_input`<sup>Optional</sup> <a name="require_pull_request_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequestInput"></a>

```python
require_pull_request_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SecureSourceManagerBranchRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>]

---

##### `allow_stale_reviews`<sup>Required</sup> <a name="allow_stale_reviews" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviews"></a>

```python
allow_stale_reviews: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `branch_rule_id`<sup>Required</sup> <a name="branch_rule_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleId"></a>

```python
branch_rule_id: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_pattern`<sup>Required</sup> <a name="include_pattern" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePattern"></a>

```python
include_pattern: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `minimum_approvals_count`<sup>Required</sup> <a name="minimum_approvals_count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCount"></a>

```python
minimum_approvals_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_reviews_count`<sup>Required</sup> <a name="minimum_reviews_count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCount"></a>

```python
minimum_reviews_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `require_comments_resolved`<sup>Required</sup> <a name="require_comments_resolved" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolved"></a>

```python
require_comments_resolved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_linear_history`<sup>Required</sup> <a name="require_linear_history" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistory"></a>

```python
require_linear_history: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_pull_request`<sup>Required</sup> <a name="require_pull_request" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequest"></a>

```python
require_pull_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecureSourceManagerBranchRuleConfig <a name="SecureSourceManagerBranchRuleConfig" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secure_source_manager_branch_rule

secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  branch_rule_id: str,
  include_pattern: str,
  location: str,
  repository_id: str,
  allow_stale_reviews: typing.Union[bool, IResolvable] = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  minimum_approvals_count: typing.Union[int, float] = None,
  minimum_reviews_count: typing.Union[int, float] = None,
  project: str = None,
  require_comments_resolved: typing.Union[bool, IResolvable] = None,
  require_linear_history: typing.Union[bool, IResolvable] = None,
  require_pull_request: typing.Union[bool, IResolvable] = None,
  timeouts: SecureSourceManagerBranchRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.branchRuleId">branch_rule_id</a></code> | <code>str</code> | The ID for the BranchRule. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.includePattern">include_pattern</a></code> | <code>str</code> | The BranchRule matches branches based on the specified regular expression. Use .* to match all branches. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.location">location</a></code> | <code>str</code> | The location for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | The ID for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.allowStaleReviews">allow_stale_reviews</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if allow stale reviews or approvals before merging to the branch. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the branch rule is disabled or not. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#id SecureSourceManagerBranchRule#id}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumApprovalsCount">minimum_approvals_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of approvals required for the branch rule to be matched. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumReviewsCount">minimum_reviews_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of reviews required for the branch rule to be matched. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#project SecureSourceManagerBranchRule#project}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireCommentsResolved">require_comments_resolved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if require comments resolved before merging to the branch. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireLinearHistory">require_linear_history</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if require linear history before merging to the branch. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requirePullRequest">require_pull_request</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the branch rule requires a pull request or not. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `branch_rule_id`<sup>Required</sup> <a name="branch_rule_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.branchRuleId"></a>

```python
branch_rule_id: str
```

- *Type:* str

The ID for the BranchRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#branch_rule_id SecureSourceManagerBranchRule#branch_rule_id}

---

##### `include_pattern`<sup>Required</sup> <a name="include_pattern" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.includePattern"></a>

```python
include_pattern: str
```

- *Type:* str

The BranchRule matches branches based on the specified regular expression. Use .* to match all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#include_pattern SecureSourceManagerBranchRule#include_pattern}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#location SecureSourceManagerBranchRule#location}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#repository_id SecureSourceManagerBranchRule#repository_id}

---

##### `allow_stale_reviews`<sup>Optional</sup> <a name="allow_stale_reviews" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.allowStaleReviews"></a>

```python
allow_stale_reviews: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if allow stale reviews or approvals before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#allow_stale_reviews SecureSourceManagerBranchRule#allow_stale_reviews}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the branch rule is disabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#disabled SecureSourceManagerBranchRule#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#id SecureSourceManagerBranchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimum_approvals_count`<sup>Optional</sup> <a name="minimum_approvals_count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumApprovalsCount"></a>

```python
minimum_approvals_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of approvals required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#minimum_approvals_count SecureSourceManagerBranchRule#minimum_approvals_count}

---

##### `minimum_reviews_count`<sup>Optional</sup> <a name="minimum_reviews_count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumReviewsCount"></a>

```python
minimum_reviews_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of reviews required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#minimum_reviews_count SecureSourceManagerBranchRule#minimum_reviews_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#project SecureSourceManagerBranchRule#project}.

---

##### `require_comments_resolved`<sup>Optional</sup> <a name="require_comments_resolved" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireCommentsResolved"></a>

```python
require_comments_resolved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if require comments resolved before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#require_comments_resolved SecureSourceManagerBranchRule#require_comments_resolved}

---

##### `require_linear_history`<sup>Optional</sup> <a name="require_linear_history" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireLinearHistory"></a>

```python
require_linear_history: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if require linear history before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#require_linear_history SecureSourceManagerBranchRule#require_linear_history}

---

##### `require_pull_request`<sup>Optional</sup> <a name="require_pull_request" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requirePullRequest"></a>

```python
require_pull_request: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the branch rule requires a pull request or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#require_pull_request SecureSourceManagerBranchRule#require_pull_request}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.timeouts"></a>

```python
timeouts: SecureSourceManagerBranchRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#timeouts SecureSourceManagerBranchRule#timeouts}

---

### SecureSourceManagerBranchRuleTimeouts <a name="SecureSourceManagerBranchRuleTimeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secure_source_manager_branch_rule

secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#create SecureSourceManagerBranchRule#create}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#delete SecureSourceManagerBranchRule#delete}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#update SecureSourceManagerBranchRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#create SecureSourceManagerBranchRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#delete SecureSourceManagerBranchRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/secure_source_manager_branch_rule#update SecureSourceManagerBranchRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecureSourceManagerBranchRuleTimeoutsOutputReference <a name="SecureSourceManagerBranchRuleTimeoutsOutputReference" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import secure_source_manager_branch_rule

secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecureSourceManagerBranchRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>]

---



