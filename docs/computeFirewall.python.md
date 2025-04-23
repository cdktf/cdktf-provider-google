# `computeFirewall` Submodule <a name="`computeFirewall` Submodule" id="@cdktf/provider-google.computeFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeFirewall <a name="ComputeFirewall" id="@cdktf/provider-google.computeFirewall.ComputeFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall google_compute_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewall(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network: str,
  allow: typing.Union[IResolvable, typing.List[ComputeFirewallAllow]] = None,
  deny: typing.Union[IResolvable, typing.List[ComputeFirewallDeny]] = None,
  description: str = None,
  destination_ranges: typing.List[str] = None,
  direction: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  log_config: ComputeFirewallLogConfig = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  source_ranges: typing.List[str] = None,
  source_service_accounts: typing.List[str] = None,
  source_tags: typing.List[str] = None,
  target_service_accounts: typing.List[str] = None,
  target_tags: typing.List[str] = None,
  timeouts: ComputeFirewallTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.network">network</a></code> | <code>str</code> | The name or self_link of the network to attach this firewall to. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.allow">allow</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>]]</code> | allow block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.deny">deny</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>]]</code> | deny block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.destinationRanges">destination_ranges</a></code> | <code>typing.List[str]</code> | If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.direction">direction</a></code> | <code>str</code> | Direction of traffic to which this firewall applies; |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This field denotes whether to enable logging for a particular firewall rule. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#id ComputeFirewall#id}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority for this rule. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#project ComputeFirewall#project}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.sourceRanges">source_ranges</a></code> | <code>typing.List[str]</code> | If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.sourceServiceAccounts">source_service_accounts</a></code> | <code>typing.List[str]</code> | If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.sourceTags">source_tags</a></code> | <code>typing.List[str]</code> | If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.targetTags">target_tags</a></code> | <code>typing.List[str]</code> | A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#name ComputeFirewall#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.network"></a>

- *Type:* str

The name or self_link of the network to attach this firewall to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#network ComputeFirewall#network}

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.allow"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>]]

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#allow ComputeFirewall#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.deny"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>]]

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#deny ComputeFirewall#deny}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#description ComputeFirewall#description}

---

##### `destination_ranges`<sup>Optional</sup> <a name="destination_ranges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.destinationRanges"></a>

- *Type:* typing.List[str]

If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges.

These ranges
must be expressed in CIDR format. IPv4 or IPv6 ranges are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#destination_ranges ComputeFirewall#destination_ranges}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.direction"></a>

- *Type:* str

Direction of traffic to which this firewall applies;

default is
INGRESS. Note: For INGRESS traffic, one of 'source_ranges',
'source_tags' or 'source_service_accounts' is required. Possible values: ["INGRESS", "EGRESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#direction ComputeFirewall#direction}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#disabled ComputeFirewall#disabled}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This field denotes whether to enable logging for a particular firewall rule.

If logging is enabled, logs will be exported to Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#enable_logging ComputeFirewall#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#id ComputeFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#log_config ComputeFirewall#log_config}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Priority for this rule.

This is an integer between 0 and 65535, both
inclusive. When not specified, the value assumed is 1000. Relative
priorities determine precedence of conflicting rules. Lower value of
priority implies higher precedence (eg, a rule with priority 0 has
higher precedence than a rule with priority 1). DENY rules take
precedence over ALLOW rules having equal priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#priority ComputeFirewall#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#project ComputeFirewall#project}.

---

##### `source_ranges`<sup>Optional</sup> <a name="source_ranges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.sourceRanges"></a>

- *Type:* typing.List[str]

If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges.

These ranges must
be expressed in CIDR format. One or both of sourceRanges and
sourceTags may be set. If both properties are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP that belongs to a tag listed in the sourceTags property. The
connection does not need to match both properties for the firewall to
apply. IPv4 or IPv6 ranges are supported. For INGRESS traffic, one of
'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#source_ranges ComputeFirewall#source_ranges}

---

##### `source_service_accounts`<sup>Optional</sup> <a name="source_service_accounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.sourceServiceAccounts"></a>

- *Type:* typing.List[str]

If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list.

Source service accounts cannot be used to control traffic to an
instance's external IP address because service accounts are associated
with an instance, not an IP address. sourceRanges can be set at the
same time as sourceServiceAccounts. If both are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP belongs to an instance with service account listed in
sourceServiceAccount. The connection does not need to match both
properties for the firewall to apply. sourceServiceAccounts cannot be
used at the same time as sourceTags or targetTags. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#source_service_accounts ComputeFirewall#source_service_accounts}

---

##### `source_tags`<sup>Optional</sup> <a name="source_tags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.sourceTags"></a>

- *Type:* typing.List[str]

If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags.

Source
tags cannot be used to control traffic to an instance's external IP
address. Because tags are associated with an instance, not an IP
address. One or both of sourceRanges and sourceTags may be set. If
both properties are set, the firewall will apply to traffic that has
source IP address within sourceRanges OR the source IP that belongs to
a tag listed in the sourceTags property. The connection does not need
to match both properties for the firewall to apply. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#source_tags ComputeFirewall#source_tags}

---

##### `target_service_accounts`<sup>Optional</sup> <a name="target_service_accounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.targetServiceAccounts"></a>

- *Type:* typing.List[str]

A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[].

targetServiceAccounts cannot be used at the same time as targetTags or
sourceTags. If neither targetServiceAccounts nor targetTags are
specified, the firewall rule applies to all instances on the specified
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#target_service_accounts ComputeFirewall#target_service_accounts}

---

##### `target_tags`<sup>Optional</sup> <a name="target_tags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.targetTags"></a>

- *Type:* typing.List[str]

A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[].

If no targetTags are specified, the firewall rule applies to all
instances on the specified network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#target_tags ComputeFirewall#target_tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#timeouts ComputeFirewall#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.putAllow">put_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.putDeny">put_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDeny">reset_deny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDestinationRanges">reset_destination_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceRanges">reset_source_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceServiceAccounts">reset_source_service_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceTags">reset_source_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTargetServiceAccounts">reset_target_service_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTargetTags">reset_target_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allow` <a name="put_allow" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putAllow"></a>

```python
def put_allow(
  value: typing.Union[IResolvable, typing.List[ComputeFirewallAllow]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putAllow.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>]]

---

##### `put_deny` <a name="put_deny" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putDeny"></a>

```python
def put_deny(
  value: typing.Union[IResolvable, typing.List[ComputeFirewallDeny]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putDeny.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>]]

---

##### `put_log_config` <a name="put_log_config" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putLogConfig"></a>

```python
def put_log_config(
  metadata: str
) -> None
```

###### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putLogConfig.parameter.metadata"></a>

- *Type:* str

This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#metadata ComputeFirewall#metadata}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#create ComputeFirewall#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#delete ComputeFirewall#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#update ComputeFirewall#update}.

---

##### `reset_allow` <a name="reset_allow" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_deny` <a name="reset_deny" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDeny"></a>

```python
def reset_deny() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination_ranges` <a name="reset_destination_ranges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDestinationRanges"></a>

```python
def reset_destination_ranges() -> None
```

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_source_ranges` <a name="reset_source_ranges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceRanges"></a>

```python
def reset_source_ranges() -> None
```

##### `reset_source_service_accounts` <a name="reset_source_service_accounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceServiceAccounts"></a>

```python
def reset_source_service_accounts() -> None
```

##### `reset_source_tags` <a name="reset_source_tags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceTags"></a>

```python
def reset_source_tags() -> None
```

##### `reset_target_service_accounts` <a name="reset_target_service_accounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTargetServiceAccounts"></a>

```python
def reset_target_service_accounts() -> None
```

##### `reset_target_tags` <a name="reset_target_tags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTargetTags"></a>

```python
def reset_target_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeFirewall resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewall.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewall.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewall.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewall.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeFirewall resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeFirewall to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList">ComputeFirewallAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList">ComputeFirewallDenyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference">ComputeFirewallLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference">ComputeFirewallTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.allowInput">allow_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.denyInput">deny_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.destinationRangesInput">destination_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.logConfigInput">log_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceRangesInput">source_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccountsInput">source_service_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceTagsInput">source_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccountsInput">target_service_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetTagsInput">target_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.destinationRanges">destination_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceRanges">source_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccounts">source_service_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceTags">source_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetTags">target_tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.allow"></a>

```python
allow: ComputeFirewallAllowList
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList">ComputeFirewallAllowList</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.deny"></a>

```python
deny: ComputeFirewallDenyList
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList">ComputeFirewallDenyList</a>

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.logConfig"></a>

```python
log_config: ComputeFirewallLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference">ComputeFirewallLogConfigOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.timeouts"></a>

```python
timeouts: ComputeFirewallTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference">ComputeFirewallTimeoutsOutputReference</a>

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.allowInput"></a>

```python
allow_input: typing.Union[IResolvable, typing.List[ComputeFirewallAllow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>]]

---

##### `deny_input`<sup>Optional</sup> <a name="deny_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.denyInput"></a>

```python
deny_input: typing.Union[IResolvable, typing.List[ComputeFirewallDeny]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_ranges_input`<sup>Optional</sup> <a name="destination_ranges_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.destinationRangesInput"></a>

```python
destination_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.logConfigInput"></a>

```python
log_config_input: ComputeFirewallLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `source_ranges_input`<sup>Optional</sup> <a name="source_ranges_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceRangesInput"></a>

```python
source_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_service_accounts_input`<sup>Optional</sup> <a name="source_service_accounts_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccountsInput"></a>

```python
source_service_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_tags_input`<sup>Optional</sup> <a name="source_tags_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceTagsInput"></a>

```python
source_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_service_accounts_input`<sup>Optional</sup> <a name="target_service_accounts_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccountsInput"></a>

```python
target_service_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_tags_input`<sup>Optional</sup> <a name="target_tags_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetTagsInput"></a>

```python
target_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeFirewallTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_ranges`<sup>Required</sup> <a name="destination_ranges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.destinationRanges"></a>

```python
destination_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `source_ranges`<sup>Required</sup> <a name="source_ranges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceRanges"></a>

```python
source_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_service_accounts`<sup>Required</sup> <a name="source_service_accounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccounts"></a>

```python
source_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_tags`<sup>Required</sup> <a name="source_tags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceTags"></a>

```python
source_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_service_accounts`<sup>Required</sup> <a name="target_service_accounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccounts"></a>

```python
target_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_tags`<sup>Required</sup> <a name="target_tags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetTags"></a>

```python
target_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeFirewallAllow <a name="ComputeFirewallAllow" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewallAllow(
  protocol: str,
  ports: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.property.protocol">protocol</a></code> | <code>str</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.property.ports">ports</a></code> | <code>typing.List[str]</code> | An optional list of ports to which this rule applies. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The IP protocol to which this rule applies.

The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip, all), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#protocol ComputeFirewall#protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: [22], [80, 443], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#ports ComputeFirewall#ports}

---

### ComputeFirewallConfig <a name="ComputeFirewallConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewallConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network: str,
  allow: typing.Union[IResolvable, typing.List[ComputeFirewallAllow]] = None,
  deny: typing.Union[IResolvable, typing.List[ComputeFirewallDeny]] = None,
  description: str = None,
  destination_ranges: typing.List[str] = None,
  direction: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  log_config: ComputeFirewallLogConfig = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  source_ranges: typing.List[str] = None,
  source_service_accounts: typing.List[str] = None,
  source_tags: typing.List[str] = None,
  target_service_accounts: typing.List[str] = None,
  target_tags: typing.List[str] = None,
  timeouts: ComputeFirewallTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.network">network</a></code> | <code>str</code> | The name or self_link of the network to attach this firewall to. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.allow">allow</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>]]</code> | allow block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.deny">deny</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>]]</code> | deny block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.destinationRanges">destination_ranges</a></code> | <code>typing.List[str]</code> | If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.direction">direction</a></code> | <code>str</code> | Direction of traffic to which this firewall applies; |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This field denotes whether to enable logging for a particular firewall rule. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#id ComputeFirewall#id}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority for this rule. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#project ComputeFirewall#project}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceRanges">source_ranges</a></code> | <code>typing.List[str]</code> | If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceServiceAccounts">source_service_accounts</a></code> | <code>typing.List[str]</code> | If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceTags">source_tags</a></code> | <code>typing.List[str]</code> | If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.targetTags">target_tags</a></code> | <code>typing.List[str]</code> | A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#name ComputeFirewall#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The name or self_link of the network to attach this firewall to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#network ComputeFirewall#network}

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.allow"></a>

```python
allow: typing.Union[IResolvable, typing.List[ComputeFirewallAllow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>]]

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#allow ComputeFirewall#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.deny"></a>

```python
deny: typing.Union[IResolvable, typing.List[ComputeFirewallDeny]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>]]

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#deny ComputeFirewall#deny}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#description ComputeFirewall#description}

---

##### `destination_ranges`<sup>Optional</sup> <a name="destination_ranges" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.destinationRanges"></a>

```python
destination_ranges: typing.List[str]
```

- *Type:* typing.List[str]

If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges.

These ranges
must be expressed in CIDR format. IPv4 or IPv6 ranges are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#destination_ranges ComputeFirewall#destination_ranges}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

Direction of traffic to which this firewall applies;

default is
INGRESS. Note: For INGRESS traffic, one of 'source_ranges',
'source_tags' or 'source_service_accounts' is required. Possible values: ["INGRESS", "EGRESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#direction ComputeFirewall#direction}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#disabled ComputeFirewall#disabled}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This field denotes whether to enable logging for a particular firewall rule.

If logging is enabled, logs will be exported to Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#enable_logging ComputeFirewall#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#id ComputeFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.logConfig"></a>

```python
log_config: ComputeFirewallLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#log_config ComputeFirewall#log_config}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Priority for this rule.

This is an integer between 0 and 65535, both
inclusive. When not specified, the value assumed is 1000. Relative
priorities determine precedence of conflicting rules. Lower value of
priority implies higher precedence (eg, a rule with priority 0 has
higher precedence than a rule with priority 1). DENY rules take
precedence over ALLOW rules having equal priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#priority ComputeFirewall#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#project ComputeFirewall#project}.

---

##### `source_ranges`<sup>Optional</sup> <a name="source_ranges" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceRanges"></a>

```python
source_ranges: typing.List[str]
```

- *Type:* typing.List[str]

If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges.

These ranges must
be expressed in CIDR format. One or both of sourceRanges and
sourceTags may be set. If both properties are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP that belongs to a tag listed in the sourceTags property. The
connection does not need to match both properties for the firewall to
apply. IPv4 or IPv6 ranges are supported. For INGRESS traffic, one of
'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#source_ranges ComputeFirewall#source_ranges}

---

##### `source_service_accounts`<sup>Optional</sup> <a name="source_service_accounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceServiceAccounts"></a>

```python
source_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list.

Source service accounts cannot be used to control traffic to an
instance's external IP address because service accounts are associated
with an instance, not an IP address. sourceRanges can be set at the
same time as sourceServiceAccounts. If both are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP belongs to an instance with service account listed in
sourceServiceAccount. The connection does not need to match both
properties for the firewall to apply. sourceServiceAccounts cannot be
used at the same time as sourceTags or targetTags. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#source_service_accounts ComputeFirewall#source_service_accounts}

---

##### `source_tags`<sup>Optional</sup> <a name="source_tags" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceTags"></a>

```python
source_tags: typing.List[str]
```

- *Type:* typing.List[str]

If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags.

Source
tags cannot be used to control traffic to an instance's external IP
address. Because tags are associated with an instance, not an IP
address. One or both of sourceRanges and sourceTags may be set. If
both properties are set, the firewall will apply to traffic that has
source IP address within sourceRanges OR the source IP that belongs to
a tag listed in the sourceTags property. The connection does not need
to match both properties for the firewall to apply. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#source_tags ComputeFirewall#source_tags}

---

##### `target_service_accounts`<sup>Optional</sup> <a name="target_service_accounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.targetServiceAccounts"></a>

```python
target_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[].

targetServiceAccounts cannot be used at the same time as targetTags or
sourceTags. If neither targetServiceAccounts nor targetTags are
specified, the firewall rule applies to all instances on the specified
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#target_service_accounts ComputeFirewall#target_service_accounts}

---

##### `target_tags`<sup>Optional</sup> <a name="target_tags" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.targetTags"></a>

```python
target_tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[].

If no targetTags are specified, the firewall rule applies to all
instances on the specified network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#target_tags ComputeFirewall#target_tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.timeouts"></a>

```python
timeouts: ComputeFirewallTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#timeouts ComputeFirewall#timeouts}

---

### ComputeFirewallDeny <a name="ComputeFirewallDeny" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewallDeny(
  protocol: str,
  ports: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.property.protocol">protocol</a></code> | <code>str</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.property.ports">ports</a></code> | <code>typing.List[str]</code> | An optional list of ports to which this rule applies. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The IP protocol to which this rule applies.

The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip, all), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#protocol ComputeFirewall#protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: [22], [80, 443], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#ports ComputeFirewall#ports}

---

### ComputeFirewallLogConfig <a name="ComputeFirewallLogConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewallLogConfig(
  metadata: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig.property.metadata">metadata</a></code> | <code>str</code> | This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"]. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#metadata ComputeFirewall#metadata}

---

### ComputeFirewallTimeouts <a name="ComputeFirewallTimeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewallTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#create ComputeFirewall#create}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#delete ComputeFirewall#delete}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#update ComputeFirewall#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#create ComputeFirewall#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#delete ComputeFirewall#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/compute_firewall#update ComputeFirewall#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeFirewallAllowList <a name="ComputeFirewallAllowList" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewallAllowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeFirewallAllowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeFirewallAllow]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>]]

---


### ComputeFirewallAllowOutputReference <a name="ComputeFirewallAllowOutputReference" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewallAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeFirewallAllow]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>]

---


### ComputeFirewallDenyList <a name="ComputeFirewallDenyList" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewallDenyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeFirewallDenyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeFirewallDeny]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>]]

---


### ComputeFirewallDenyOutputReference <a name="ComputeFirewallDenyOutputReference" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewallDenyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeFirewallDeny]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>]

---


### ComputeFirewallLogConfigOutputReference <a name="ComputeFirewallLogConfigOutputReference" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewallLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeFirewallLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

---


### ComputeFirewallTimeoutsOutputReference <a name="ComputeFirewallTimeoutsOutputReference" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_firewall

computeFirewall.ComputeFirewallTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeFirewallTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>]

---



