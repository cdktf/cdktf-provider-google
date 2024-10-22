# `computeNetworkFirewallPolicyRule` Submodule <a name="`computeNetworkFirewallPolicyRule` Submodule" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkFirewallPolicyRule <a name="ComputeNetworkFirewallPolicyRule" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule google_compute_network_firewall_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  direction: str,
  firewall_policy: str,
  match: ComputeNetworkFirewallPolicyRuleMatch,
  priority: typing.Union[int, float],
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  rule_name: str = None,
  security_profile_group: str = None,
  target_secure_tags: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleTargetSecureTags]] = None,
  target_service_accounts: typing.List[str] = None,
  timeouts: ComputeNetworkFirewallPolicyRuleTimeouts = None,
  tls_inspect: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.action">action</a></code> | <code>str</code> | The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group". |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.direction">direction</a></code> | <code>str</code> | The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.firewallPolicy">firewall_policy</a></code> | <code>str</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#id ComputeNetworkFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#project ComputeNetworkFirewallPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.securityProfileGroup">security_profile_group</a></code> | <code>str</code> | A fully-qualified URL of a SecurityProfile resource instance. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.targetSecureTags">target_secure_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags">ComputeNetworkFirewallPolicyRuleTargetSecureTags</a>]]</code> | target_secure_tags block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts">ComputeNetworkFirewallPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.tlsInspect">tls_inspect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.action"></a>

- *Type:* str

The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#action ComputeNetworkFirewallPolicyRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.direction"></a>

- *Type:* str

The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#direction ComputeNetworkFirewallPolicyRule#direction}

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.firewallPolicy"></a>

- *Type:* str

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#firewall_policy ComputeNetworkFirewallPolicyRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#match ComputeNetworkFirewallPolicyRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#priority ComputeNetworkFirewallPolicyRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.description"></a>

- *Type:* str

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#description ComputeNetworkFirewallPolicyRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#disabled ComputeNetworkFirewallPolicyRule#disabled}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver.
Logs may be exported to BigQuery or Pub/Sub.
Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#enable_logging ComputeNetworkFirewallPolicyRule#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#id ComputeNetworkFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#project ComputeNetworkFirewallPolicyRule#project}.

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.ruleName"></a>

- *Type:* str

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#rule_name ComputeNetworkFirewallPolicyRule#rule_name}

---

##### `security_profile_group`<sup>Optional</sup> <a name="security_profile_group" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.securityProfileGroup"></a>

- *Type:* str

A fully-qualified URL of a SecurityProfile resource instance.

Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
Must be specified if action = 'apply_security_profile_group' and cannot be specified for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#security_profile_group ComputeNetworkFirewallPolicyRule#security_profile_group}

---

##### `target_secure_tags`<sup>Optional</sup> <a name="target_secure_tags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.targetSecureTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags">ComputeNetworkFirewallPolicyRuleTargetSecureTags</a>]]

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#target_secure_tags ComputeNetworkFirewallPolicyRule#target_secure_tags}

---

##### `target_service_accounts`<sup>Optional</sup> <a name="target_service_accounts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.targetServiceAccounts"></a>

- *Type:* typing.List[str]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#target_service_accounts ComputeNetworkFirewallPolicyRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts">ComputeNetworkFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#timeouts ComputeNetworkFirewallPolicyRule#timeouts}

---

##### `tls_inspect`<sup>Optional</sup> <a name="tls_inspect" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.tlsInspect"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean flag indicating if the traffic should be TLS decrypted.

Can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#tls_inspect ComputeNetworkFirewallPolicyRule#tls_inspect}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTargetSecureTags">put_target_secure_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetRuleName">reset_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetSecurityProfileGroup">reset_security_profile_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTargetSecureTags">reset_target_secure_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTargetServiceAccounts">reset_target_service_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTlsInspect">reset_tls_inspect</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_match` <a name="put_match" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch"></a>

```python
def put_match(
  layer4_configs: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleMatchLayer4Configs]],
  dest_address_groups: typing.List[str] = None,
  dest_fqdns: typing.List[str] = None,
  dest_ip_ranges: typing.List[str] = None,
  dest_region_codes: typing.List[str] = None,
  dest_threat_intelligences: typing.List[str] = None,
  src_address_groups: typing.List[str] = None,
  src_fqdns: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None,
  src_region_codes: typing.List[str] = None,
  src_secure_tags: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags]] = None,
  src_threat_intelligences: typing.List[str] = None
) -> None
```

###### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch.parameter.layer4Configs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs">ComputeNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#layer4_configs ComputeNetworkFirewallPolicyRule#layer4_configs}

---

###### `dest_address_groups`<sup>Optional</sup> <a name="dest_address_groups" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch.parameter.destAddressGroups"></a>

- *Type:* typing.List[str]

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#dest_address_groups ComputeNetworkFirewallPolicyRule#dest_address_groups}

---

###### `dest_fqdns`<sup>Optional</sup> <a name="dest_fqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch.parameter.destFqdns"></a>

- *Type:* typing.List[str]

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination.

Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#dest_fqdns ComputeNetworkFirewallPolicyRule#dest_fqdns}

---

###### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch.parameter.destIpRanges"></a>

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#dest_ip_ranges ComputeNetworkFirewallPolicyRule#dest_ip_ranges}

---

###### `dest_region_codes`<sup>Optional</sup> <a name="dest_region_codes" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch.parameter.destRegionCodes"></a>

- *Type:* typing.List[str]

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of dest region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#dest_region_codes ComputeNetworkFirewallPolicyRule#dest_region_codes}

---

###### `dest_threat_intelligences`<sup>Optional</sup> <a name="dest_threat_intelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch.parameter.destThreatIntelligences"></a>

- *Type:* typing.List[str]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#dest_threat_intelligences ComputeNetworkFirewallPolicyRule#dest_threat_intelligences}

---

###### `src_address_groups`<sup>Optional</sup> <a name="src_address_groups" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch.parameter.srcAddressGroups"></a>

- *Type:* typing.List[str]

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#src_address_groups ComputeNetworkFirewallPolicyRule#src_address_groups}

---

###### `src_fqdns`<sup>Optional</sup> <a name="src_fqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch.parameter.srcFqdns"></a>

- *Type:* typing.List[str]

Fully Qualified Domain Name (FQDN) which should be matched against traffic source.

Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#src_fqdns ComputeNetworkFirewallPolicyRule#src_fqdns}

---

###### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch.parameter.srcIpRanges"></a>

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#src_ip_ranges ComputeNetworkFirewallPolicyRule#src_ip_ranges}

---

###### `src_region_codes`<sup>Optional</sup> <a name="src_region_codes" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch.parameter.srcRegionCodes"></a>

- *Type:* typing.List[str]

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#src_region_codes ComputeNetworkFirewallPolicyRule#src_region_codes}

---

###### `src_secure_tags`<sup>Optional</sup> <a name="src_secure_tags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch.parameter.srcSecureTags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]

src_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#src_secure_tags ComputeNetworkFirewallPolicyRule#src_secure_tags}

---

###### `src_threat_intelligences`<sup>Optional</sup> <a name="src_threat_intelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch.parameter.srcThreatIntelligences"></a>

- *Type:* typing.List[str]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#src_threat_intelligences ComputeNetworkFirewallPolicyRule#src_threat_intelligences}

---

##### `put_target_secure_tags` <a name="put_target_secure_tags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTargetSecureTags"></a>

```python
def put_target_secure_tags(
  value: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleTargetSecureTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTargetSecureTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags">ComputeNetworkFirewallPolicyRuleTargetSecureTags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#create ComputeNetworkFirewallPolicyRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#delete ComputeNetworkFirewallPolicyRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#update ComputeNetworkFirewallPolicyRule#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetRuleName"></a>

```python
def reset_rule_name() -> None
```

##### `reset_security_profile_group` <a name="reset_security_profile_group" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetSecurityProfileGroup"></a>

```python
def reset_security_profile_group() -> None
```

##### `reset_target_secure_tags` <a name="reset_target_secure_tags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTargetSecureTags"></a>

```python
def reset_target_secure_tags() -> None
```

##### `reset_target_service_accounts` <a name="reset_target_service_accounts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTargetServiceAccounts"></a>

```python
def reset_target_service_accounts() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_inspect` <a name="reset_tls_inspect" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTlsInspect"></a>

```python
def reset_tls_inspect() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeNetworkFirewallPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeNetworkFirewallPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeNetworkFirewallPolicyRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeNetworkFirewallPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNetworkFirewallPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference">ComputeNetworkFirewallPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.ruleTupleCount">rule_tuple_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetSecureTags">target_secure_tags</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList">ComputeNetworkFirewallPolicyRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference">ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.firewallPolicyInput">firewall_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.securityProfileGroupInput">security_profile_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetSecureTagsInput">target_secure_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags">ComputeNetworkFirewallPolicyRuleTargetSecureTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetServiceAccountsInput">target_service_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts">ComputeNetworkFirewallPolicyRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.tlsInspectInput">tls_inspect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.firewallPolicy">firewall_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.securityProfileGroup">security_profile_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.tlsInspect">tls_inspect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.match"></a>

```python
match: ComputeNetworkFirewallPolicyRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference">ComputeNetworkFirewallPolicyRuleMatchOutputReference</a>

---

##### `rule_tuple_count`<sup>Required</sup> <a name="rule_tuple_count" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.ruleTupleCount"></a>

```python
rule_tuple_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_secure_tags`<sup>Required</sup> <a name="target_secure_tags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetSecureTags"></a>

```python
target_secure_tags: ComputeNetworkFirewallPolicyRuleTargetSecureTagsList
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList">ComputeNetworkFirewallPolicyRuleTargetSecureTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.timeouts"></a>

```python
timeouts: ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference">ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_policy_input`<sup>Optional</sup> <a name="firewall_policy_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.firewallPolicyInput"></a>

```python
firewall_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.matchInput"></a>

```python
match_input: ComputeNetworkFirewallPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `security_profile_group_input`<sup>Optional</sup> <a name="security_profile_group_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.securityProfileGroupInput"></a>

```python
security_profile_group_input: str
```

- *Type:* str

---

##### `target_secure_tags_input`<sup>Optional</sup> <a name="target_secure_tags_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetSecureTagsInput"></a>

```python
target_secure_tags_input: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleTargetSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags">ComputeNetworkFirewallPolicyRuleTargetSecureTags</a>]]

---

##### `target_service_accounts_input`<sup>Optional</sup> <a name="target_service_accounts_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetServiceAccountsInput"></a>

```python
target_service_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeNetworkFirewallPolicyRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts">ComputeNetworkFirewallPolicyRuleTimeouts</a>]

---

##### `tls_inspect_input`<sup>Optional</sup> <a name="tls_inspect_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.tlsInspectInput"></a>

```python
tls_inspect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.firewallPolicy"></a>

```python
firewall_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `security_profile_group`<sup>Required</sup> <a name="security_profile_group" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.securityProfileGroup"></a>

```python
security_profile_group: str
```

- *Type:* str

---

##### `target_service_accounts`<sup>Required</sup> <a name="target_service_accounts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetServiceAccounts"></a>

```python
target_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_inspect`<sup>Required</sup> <a name="tls_inspect" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.tlsInspect"></a>

```python
tls_inspect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkFirewallPolicyRuleConfig <a name="ComputeNetworkFirewallPolicyRuleConfig" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  direction: str,
  firewall_policy: str,
  match: ComputeNetworkFirewallPolicyRuleMatch,
  priority: typing.Union[int, float],
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  rule_name: str = None,
  security_profile_group: str = None,
  target_secure_tags: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleTargetSecureTags]] = None,
  target_service_accounts: typing.List[str] = None,
  timeouts: ComputeNetworkFirewallPolicyRuleTimeouts = None,
  tls_inspect: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.action">action</a></code> | <code>str</code> | The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group". |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.direction">direction</a></code> | <code>str</code> | The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.firewallPolicy">firewall_policy</a></code> | <code>str</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.description">description</a></code> | <code>str</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#id ComputeNetworkFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#project ComputeNetworkFirewallPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.ruleName">rule_name</a></code> | <code>str</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.securityProfileGroup">security_profile_group</a></code> | <code>str</code> | A fully-qualified URL of a SecurityProfile resource instance. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.targetSecureTags">target_secure_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags">ComputeNetworkFirewallPolicyRuleTargetSecureTags</a>]]</code> | target_secure_tags block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts">ComputeNetworkFirewallPolicyRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.tlsInspect">tls_inspect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny", "goto_next" and "apply_security_profile_group".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#action ComputeNetworkFirewallPolicyRule#action}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

The direction in which this rule applies. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#direction ComputeNetworkFirewallPolicyRule#direction}

---

##### `firewall_policy`<sup>Required</sup> <a name="firewall_policy" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.firewallPolicy"></a>

```python
firewall_policy: str
```

- *Type:* str

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#firewall_policy ComputeNetworkFirewallPolicyRule#firewall_policy}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.match"></a>

```python
match: ComputeNetworkFirewallPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#match ComputeNetworkFirewallPolicyRule#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#priority ComputeNetworkFirewallPolicyRule#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#description ComputeNetworkFirewallPolicyRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#disabled ComputeNetworkFirewallPolicyRule#disabled}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver.
Logs may be exported to BigQuery or Pub/Sub.
Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#enable_logging ComputeNetworkFirewallPolicyRule#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#id ComputeNetworkFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#project ComputeNetworkFirewallPolicyRule#project}.

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#rule_name ComputeNetworkFirewallPolicyRule#rule_name}

---

##### `security_profile_group`<sup>Optional</sup> <a name="security_profile_group" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.securityProfileGroup"></a>

```python
security_profile_group: str
```

- *Type:* str

A fully-qualified URL of a SecurityProfile resource instance.

Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
Must be specified if action = 'apply_security_profile_group' and cannot be specified for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#security_profile_group ComputeNetworkFirewallPolicyRule#security_profile_group}

---

##### `target_secure_tags`<sup>Optional</sup> <a name="target_secure_tags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.targetSecureTags"></a>

```python
target_secure_tags: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleTargetSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags">ComputeNetworkFirewallPolicyRuleTargetSecureTags</a>]]

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#target_secure_tags ComputeNetworkFirewallPolicyRule#target_secure_tags}

---

##### `target_service_accounts`<sup>Optional</sup> <a name="target_service_accounts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.targetServiceAccounts"></a>

```python
target_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#target_service_accounts ComputeNetworkFirewallPolicyRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.timeouts"></a>

```python
timeouts: ComputeNetworkFirewallPolicyRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts">ComputeNetworkFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#timeouts ComputeNetworkFirewallPolicyRule#timeouts}

---

##### `tls_inspect`<sup>Optional</sup> <a name="tls_inspect" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.tlsInspect"></a>

```python
tls_inspect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean flag indicating if the traffic should be TLS decrypted.

Can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#tls_inspect ComputeNetworkFirewallPolicyRule#tls_inspect}

---

### ComputeNetworkFirewallPolicyRuleMatch <a name="ComputeNetworkFirewallPolicyRuleMatch" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch(
  layer4_configs: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleMatchLayer4Configs]],
  dest_address_groups: typing.List[str] = None,
  dest_fqdns: typing.List[str] = None,
  dest_ip_ranges: typing.List[str] = None,
  dest_region_codes: typing.List[str] = None,
  dest_threat_intelligences: typing.List[str] = None,
  src_address_groups: typing.List[str] = None,
  src_fqdns: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None,
  src_region_codes: typing.List[str] = None,
  src_secure_tags: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags]] = None,
  src_threat_intelligences: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.layer4Configs">layer4_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs">ComputeNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]</code> | layer4_configs block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.destAddressGroups">dest_address_groups</a></code> | <code>typing.List[str]</code> | Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.destFqdns">dest_fqdns</a></code> | <code>typing.List[str]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.destRegionCodes">dest_region_codes</a></code> | <code>typing.List[str]</code> | Region codes whose IP addresses will be used to match for destination of traffic. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.destThreatIntelligences">dest_threat_intelligences</a></code> | <code>typing.List[str]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcAddressGroups">src_address_groups</a></code> | <code>typing.List[str]</code> | Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcFqdns">src_fqdns</a></code> | <code>typing.List[str]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic source. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcRegionCodes">src_region_codes</a></code> | <code>typing.List[str]</code> | Region codes whose IP addresses will be used to match for source of traffic. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcSecureTags">src_secure_tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]</code> | src_secure_tags block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcThreatIntelligences">src_threat_intelligences</a></code> | <code>typing.List[str]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source. |

---

##### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.layer4Configs"></a>

```python
layer4_configs: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleMatchLayer4Configs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs">ComputeNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#layer4_configs ComputeNetworkFirewallPolicyRule#layer4_configs}

---

##### `dest_address_groups`<sup>Optional</sup> <a name="dest_address_groups" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.destAddressGroups"></a>

```python
dest_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#dest_address_groups ComputeNetworkFirewallPolicyRule#dest_address_groups}

---

##### `dest_fqdns`<sup>Optional</sup> <a name="dest_fqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.destFqdns"></a>

```python
dest_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination.

Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#dest_fqdns ComputeNetworkFirewallPolicyRule#dest_fqdns}

---

##### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#dest_ip_ranges ComputeNetworkFirewallPolicyRule#dest_ip_ranges}

---

##### `dest_region_codes`<sup>Optional</sup> <a name="dest_region_codes" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.destRegionCodes"></a>

```python
dest_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of dest region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#dest_region_codes ComputeNetworkFirewallPolicyRule#dest_region_codes}

---

##### `dest_threat_intelligences`<sup>Optional</sup> <a name="dest_threat_intelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.destThreatIntelligences"></a>

```python
dest_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#dest_threat_intelligences ComputeNetworkFirewallPolicyRule#dest_threat_intelligences}

---

##### `src_address_groups`<sup>Optional</sup> <a name="src_address_groups" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcAddressGroups"></a>

```python
src_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#src_address_groups ComputeNetworkFirewallPolicyRule#src_address_groups}

---

##### `src_fqdns`<sup>Optional</sup> <a name="src_fqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcFqdns"></a>

```python
src_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

Fully Qualified Domain Name (FQDN) which should be matched against traffic source.

Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#src_fqdns ComputeNetworkFirewallPolicyRule#src_fqdns}

---

##### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#src_ip_ranges ComputeNetworkFirewallPolicyRule#src_ip_ranges}

---

##### `src_region_codes`<sup>Optional</sup> <a name="src_region_codes" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcRegionCodes"></a>

```python
src_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#src_region_codes ComputeNetworkFirewallPolicyRule#src_region_codes}

---

##### `src_secure_tags`<sup>Optional</sup> <a name="src_secure_tags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcSecureTags"></a>

```python
src_secure_tags: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]

src_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#src_secure_tags ComputeNetworkFirewallPolicyRule#src_secure_tags}

---

##### `src_threat_intelligences`<sup>Optional</sup> <a name="src_threat_intelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcThreatIntelligences"></a>

```python
src_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#src_threat_intelligences ComputeNetworkFirewallPolicyRule#src_threat_intelligences}

---

### ComputeNetworkFirewallPolicyRuleMatchLayer4Configs <a name="ComputeNetworkFirewallPolicyRuleMatchLayer4Configs" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs(
  ip_protocol: str,
  ports: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs.property.ports">ports</a></code> | <code>typing.List[str]</code> | An optional list of ports to which this rule applies. |

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The IP protocol to which this rule applies.

The protocol type is required when creating a firewall rule.
This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#ip_protocol ComputeNetworkFirewallPolicyRule#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and ["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#ports ComputeNetworkFirewallPolicyRule#ports}

---

### ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags <a name="ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags.property.name">name</a></code> | <code>str</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#name ComputeNetworkFirewallPolicyRule#name}

---

### ComputeNetworkFirewallPolicyRuleTargetSecureTags <a name="ComputeNetworkFirewallPolicyRuleTargetSecureTags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags.property.name">name</a></code> | <code>str</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#name ComputeNetworkFirewallPolicyRule#name}

---

### ComputeNetworkFirewallPolicyRuleTimeouts <a name="ComputeNetworkFirewallPolicyRuleTimeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#create ComputeNetworkFirewallPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#delete ComputeNetworkFirewallPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#update ComputeNetworkFirewallPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#create ComputeNetworkFirewallPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#delete ComputeNetworkFirewallPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_network_firewall_policy_rule#update ComputeNetworkFirewallPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList <a name="ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs">ComputeNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleMatchLayer4Configs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs">ComputeNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]

---


### ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference <a name="ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs">ComputeNetworkFirewallPolicyRuleMatchLayer4Configs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeNetworkFirewallPolicyRuleMatchLayer4Configs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs">ComputeNetworkFirewallPolicyRuleMatchLayer4Configs</a>]

---


### ComputeNetworkFirewallPolicyRuleMatchOutputReference <a name="ComputeNetworkFirewallPolicyRuleMatchOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs">put_layer4_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags">put_src_secure_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups">reset_dest_address_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestFqdns">reset_dest_fqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestIpRanges">reset_dest_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes">reset_dest_region_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences">reset_dest_threat_intelligences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups">reset_src_address_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcFqdns">reset_src_fqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges">reset_src_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes">reset_src_region_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags">reset_src_secure_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences">reset_src_threat_intelligences</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_layer4_configs` <a name="put_layer4_configs" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs"></a>

```python
def put_layer4_configs(
  value: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleMatchLayer4Configs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs">ComputeNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]

---

##### `put_src_secure_tags` <a name="put_src_secure_tags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags"></a>

```python
def put_src_secure_tags(
  value: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]

---

##### `reset_dest_address_groups` <a name="reset_dest_address_groups" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups"></a>

```python
def reset_dest_address_groups() -> None
```

##### `reset_dest_fqdns` <a name="reset_dest_fqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestFqdns"></a>

```python
def reset_dest_fqdns() -> None
```

##### `reset_dest_ip_ranges` <a name="reset_dest_ip_ranges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestIpRanges"></a>

```python
def reset_dest_ip_ranges() -> None
```

##### `reset_dest_region_codes` <a name="reset_dest_region_codes" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes"></a>

```python
def reset_dest_region_codes() -> None
```

##### `reset_dest_threat_intelligences` <a name="reset_dest_threat_intelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences"></a>

```python
def reset_dest_threat_intelligences() -> None
```

##### `reset_src_address_groups` <a name="reset_src_address_groups" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups"></a>

```python
def reset_src_address_groups() -> None
```

##### `reset_src_fqdns` <a name="reset_src_fqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcFqdns"></a>

```python
def reset_src_fqdns() -> None
```

##### `reset_src_ip_ranges` <a name="reset_src_ip_ranges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges"></a>

```python
def reset_src_ip_ranges() -> None
```

##### `reset_src_region_codes` <a name="reset_src_region_codes" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes"></a>

```python
def reset_src_region_codes() -> None
```

##### `reset_src_secure_tags` <a name="reset_src_secure_tags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags"></a>

```python
def reset_src_secure_tags() -> None
```

##### `reset_src_threat_intelligences` <a name="reset_src_threat_intelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences"></a>

```python
def reset_src_threat_intelligences() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.layer4Configs">layer4_configs</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList">ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTags">src_secure_tags</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput">dest_address_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput">dest_fqdns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput">dest_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput">dest_region_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput">dest_threat_intelligences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput">layer4_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs">ComputeNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput">src_address_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput">src_fqdns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput">src_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput">src_region_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput">src_secure_tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput">src_threat_intelligences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroups">dest_address_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdns">dest_fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodes">dest_region_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences">dest_threat_intelligences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups">src_address_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdns">src_fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes">src_region_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences">src_threat_intelligences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `layer4_configs`<sup>Required</sup> <a name="layer4_configs" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.layer4Configs"></a>

```python
layer4_configs: ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList">ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList</a>

---

##### `src_secure_tags`<sup>Required</sup> <a name="src_secure_tags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTags"></a>

```python
src_secure_tags: ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList</a>

---

##### `dest_address_groups_input`<sup>Optional</sup> <a name="dest_address_groups_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput"></a>

```python
dest_address_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_fqdns_input`<sup>Optional</sup> <a name="dest_fqdns_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput"></a>

```python
dest_fqdns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_ip_ranges_input`<sup>Optional</sup> <a name="dest_ip_ranges_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput"></a>

```python
dest_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_region_codes_input`<sup>Optional</sup> <a name="dest_region_codes_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput"></a>

```python
dest_region_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_threat_intelligences_input`<sup>Optional</sup> <a name="dest_threat_intelligences_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput"></a>

```python
dest_threat_intelligences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `layer4_configs_input`<sup>Optional</sup> <a name="layer4_configs_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```python
layer4_configs_input: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleMatchLayer4Configs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs">ComputeNetworkFirewallPolicyRuleMatchLayer4Configs</a>]]

---

##### `src_address_groups_input`<sup>Optional</sup> <a name="src_address_groups_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput"></a>

```python
src_address_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_fqdns_input`<sup>Optional</sup> <a name="src_fqdns_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput"></a>

```python
src_fqdns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges_input`<sup>Optional</sup> <a name="src_ip_ranges_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput"></a>

```python
src_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_region_codes_input`<sup>Optional</sup> <a name="src_region_codes_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput"></a>

```python
src_region_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_secure_tags_input`<sup>Optional</sup> <a name="src_secure_tags_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput"></a>

```python
src_secure_tags_input: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]

---

##### `src_threat_intelligences_input`<sup>Optional</sup> <a name="src_threat_intelligences_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput"></a>

```python
src_threat_intelligences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_address_groups`<sup>Required</sup> <a name="dest_address_groups" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroups"></a>

```python
dest_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_fqdns`<sup>Required</sup> <a name="dest_fqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdns"></a>

```python
dest_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_ip_ranges`<sup>Required</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_region_codes`<sup>Required</sup> <a name="dest_region_codes" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodes"></a>

```python
dest_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_threat_intelligences`<sup>Required</sup> <a name="dest_threat_intelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences"></a>

```python
dest_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_address_groups`<sup>Required</sup> <a name="src_address_groups" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups"></a>

```python
src_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_fqdns`<sup>Required</sup> <a name="src_fqdns" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdns"></a>

```python
src_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_region_codes`<sup>Required</sup> <a name="src_region_codes" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes"></a>

```python
src_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_threat_intelligences`<sup>Required</sup> <a name="src_threat_intelligences" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences"></a>

```python
src_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: ComputeNetworkFirewallPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a>

---


### ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList <a name="ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]]

---


### ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference <a name="ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags</a>]

---


### ComputeNetworkFirewallPolicyRuleTargetSecureTagsList <a name="ComputeNetworkFirewallPolicyRuleTargetSecureTagsList" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags">ComputeNetworkFirewallPolicyRuleTargetSecureTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeNetworkFirewallPolicyRuleTargetSecureTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags">ComputeNetworkFirewallPolicyRuleTargetSecureTags</a>]]

---


### ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference <a name="ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags">ComputeNetworkFirewallPolicyRuleTargetSecureTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeNetworkFirewallPolicyRuleTargetSecureTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags">ComputeNetworkFirewallPolicyRuleTargetSecureTags</a>]

---


### ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference <a name="ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_firewall_policy_rule

computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts">ComputeNetworkFirewallPolicyRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeNetworkFirewallPolicyRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts">ComputeNetworkFirewallPolicyRuleTimeouts</a>]

---



