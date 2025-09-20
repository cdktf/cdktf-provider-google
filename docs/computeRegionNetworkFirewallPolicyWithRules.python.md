# `computeRegionNetworkFirewallPolicyWithRules` Submodule <a name="`computeRegionNetworkFirewallPolicyWithRules` Submodule" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionNetworkFirewallPolicyWithRules <a name="ComputeRegionNetworkFirewallPolicyWithRules" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules google_compute_region_network_firewall_policy_with_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules(
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
  rule: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRule]],
  description: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionNetworkFirewallPolicyWithRulesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.name">name</a></code> | <code>str</code> | User-provided name of the Network firewall policy. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule">ComputeRegionNetworkFirewallPolicyWithRulesRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#id ComputeRegionNetworkFirewallPolicyWithRules#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#project ComputeRegionNetworkFirewallPolicyWithRules#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts">ComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.name"></a>

- *Type:* str

User-provided name of the Network firewall policy.

The name should be unique in the project in which the firewall policy is created.
The name must be 1-63 characters long, and comply with RFC1035. Specifically,
the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?
which means the first character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#name ComputeRegionNetworkFirewallPolicyWithRules#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule">ComputeRegionNetworkFirewallPolicyWithRulesRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#rule ComputeRegionNetworkFirewallPolicyWithRules#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#description ComputeRegionNetworkFirewallPolicyWithRules#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#id ComputeRegionNetworkFirewallPolicyWithRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#project ComputeRegionNetworkFirewallPolicyWithRules#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.region"></a>

- *Type:* str

The region of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#region ComputeRegionNetworkFirewallPolicyWithRules#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts">ComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#timeouts ComputeRegionNetworkFirewallPolicyWithRules#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule">ComputeRegionNetworkFirewallPolicyWithRulesRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#create ComputeRegionNetworkFirewallPolicyWithRules#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#delete ComputeRegionNetworkFirewallPolicyWithRules#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#update ComputeRegionNetworkFirewallPolicyWithRules#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeRegionNetworkFirewallPolicyWithRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeRegionNetworkFirewallPolicyWithRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRegionNetworkFirewallPolicyWithRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRegionNetworkFirewallPolicyWithRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionNetworkFirewallPolicyWithRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.predefinedRules">predefined_rules</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList">ComputeRegionNetworkFirewallPolicyWithRulesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.ruleTupleCount">rule_tuple_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.selfLinkWithId">self_link_with_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference">ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule">ComputeRegionNetworkFirewallPolicyWithRulesRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts">ComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

##### `predefined_rules`<sup>Required</sup> <a name="predefined_rules" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.predefinedRules"></a>

```python
predefined_rules: ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.rule"></a>

```python
rule: ComputeRegionNetworkFirewallPolicyWithRulesRuleList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList">ComputeRegionNetworkFirewallPolicyWithRulesRuleList</a>

---

##### `rule_tuple_count`<sup>Required</sup> <a name="rule_tuple_count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.ruleTupleCount"></a>

```python
rule_tuple_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `self_link_with_id`<sup>Required</sup> <a name="self_link_with_id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.selfLinkWithId"></a>

```python
self_link_with_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.timeouts"></a>

```python
timeouts: ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference">ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule">ComputeRegionNetworkFirewallPolicyWithRulesRule</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeRegionNetworkFirewallPolicyWithRulesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts">ComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionNetworkFirewallPolicyWithRulesConfig <a name="ComputeRegionNetworkFirewallPolicyWithRulesConfig" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rule: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRule]],
  description: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionNetworkFirewallPolicyWithRulesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.name">name</a></code> | <code>str</code> | User-provided name of the Network firewall policy. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule">ComputeRegionNetworkFirewallPolicyWithRulesRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#id ComputeRegionNetworkFirewallPolicyWithRules#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#project ComputeRegionNetworkFirewallPolicyWithRules#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.region">region</a></code> | <code>str</code> | The region of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts">ComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

User-provided name of the Network firewall policy.

The name should be unique in the project in which the firewall policy is created.
The name must be 1-63 characters long, and comply with RFC1035. Specifically,
the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?
which means the first character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#name ComputeRegionNetworkFirewallPolicyWithRules#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule">ComputeRegionNetworkFirewallPolicyWithRulesRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#rule ComputeRegionNetworkFirewallPolicyWithRules#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#description ComputeRegionNetworkFirewallPolicyWithRules#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#id ComputeRegionNetworkFirewallPolicyWithRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#project ComputeRegionNetworkFirewallPolicyWithRules#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#region ComputeRegionNetworkFirewallPolicyWithRules#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionNetworkFirewallPolicyWithRulesTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts">ComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#timeouts ComputeRegionNetworkFirewallPolicyWithRules#timeouts}

---

### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules()
```


### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch()
```


### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config()
```


### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag()
```


### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag()
```


### ComputeRegionNetworkFirewallPolicyWithRulesRule <a name="ComputeRegionNetworkFirewallPolicyWithRulesRule" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule(
  action: str,
  match: ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch,
  priority: typing.Union[int, float],
  description: str = None,
  direction: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  rule_name: str = None,
  security_profile_group: str = None,
  target_secure_tag: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag]] = None,
  target_service_accounts: typing.List[str] = None,
  tls_inspect: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.action">action</a></code> | <code>str</code> | The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny", "apply_security_profile_group" or "goto_next". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.description">description</a></code> | <code>str</code> | A description of the rule. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.direction">direction</a></code> | <code>str</code> | The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.ruleName">rule_name</a></code> | <code>str</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.securityProfileGroup">security_profile_group</a></code> | <code>str</code> | A fully-qualified URL of a SecurityProfile resource instance. Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group Must be specified if action is 'apply_security_profile_group'. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.targetSecureTag">target_secure_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>]]</code> | target_secure_tag block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.tlsInspect">tls_inspect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.action"></a>

```python
action: str
```

- *Type:* str

The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny", "apply_security_profile_group" or "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#action ComputeRegionNetworkFirewallPolicyWithRules#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.match"></a>

```python
match: ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#match ComputeRegionNetworkFirewallPolicyWithRules#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#priority ComputeRegionNetworkFirewallPolicyWithRules#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#description ComputeRegionNetworkFirewallPolicyWithRules#description}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.direction"></a>

```python
direction: str
```

- *Type:* str

The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#direction ComputeRegionNetworkFirewallPolicyWithRules#direction}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether the firewall policy rule is disabled.

When set to true,
the firewall policy rule is not enforced and traffic behaves as if it did
not exist. If this is unspecified, the firewall policy rule will be
enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#disabled ComputeRegionNetworkFirewallPolicyWithRules#disabled}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#enable_logging ComputeRegionNetworkFirewallPolicyWithRules#enable_logging}

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#rule_name ComputeRegionNetworkFirewallPolicyWithRules#rule_name}

---

##### `security_profile_group`<sup>Optional</sup> <a name="security_profile_group" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.securityProfileGroup"></a>

```python
security_profile_group: str
```

- *Type:* str

A fully-qualified URL of a SecurityProfile resource instance. Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group Must be specified if action is 'apply_security_profile_group'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#security_profile_group ComputeRegionNetworkFirewallPolicyWithRules#security_profile_group}

---

##### `target_secure_tag`<sup>Optional</sup> <a name="target_secure_tag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.targetSecureTag"></a>

```python
target_secure_tag: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>]]

target_secure_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#target_secure_tag ComputeRegionNetworkFirewallPolicyWithRules#target_secure_tag}

---

##### `target_service_accounts`<sup>Optional</sup> <a name="target_service_accounts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.targetServiceAccounts"></a>

```python
target_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#target_service_accounts ComputeRegionNetworkFirewallPolicyWithRules#target_service_accounts}

---

##### `tls_inspect`<sup>Optional</sup> <a name="tls_inspect" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule.property.tlsInspect"></a>

```python
tls_inspect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean flag indicating if the traffic should be TLS decrypted.

It can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#tls_inspect ComputeRegionNetworkFirewallPolicyWithRules#tls_inspect}

---

### ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch <a name="ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch(
  layer4_config: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config]],
  dest_address_groups: typing.List[str] = None,
  dest_fqdns: typing.List[str] = None,
  dest_ip_ranges: typing.List[str] = None,
  dest_region_codes: typing.List[str] = None,
  dest_threat_intelligences: typing.List[str] = None,
  src_address_groups: typing.List[str] = None,
  src_fqdns: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None,
  src_region_codes: typing.List[str] = None,
  src_secure_tag: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag]] = None,
  src_threat_intelligences: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.layer4Config">layer4_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>]]</code> | layer4_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destAddressGroups">dest_address_groups</a></code> | <code>typing.List[str]</code> | Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destFqdns">dest_fqdns</a></code> | <code>typing.List[str]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | Destination IP address range in CIDR format. Required for EGRESS rules. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destRegionCodes">dest_region_codes</a></code> | <code>typing.List[str]</code> | Region codes whose IP addresses will be used to match for destination of traffic. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destThreatIntelligences">dest_threat_intelligences</a></code> | <code>typing.List[str]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcAddressGroups">src_address_groups</a></code> | <code>typing.List[str]</code> | Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcFqdns">src_fqdns</a></code> | <code>typing.List[str]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | Source IP address range in CIDR format. Required for INGRESS rules. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcRegionCodes">src_region_codes</a></code> | <code>typing.List[str]</code> | Region codes whose IP addresses will be used to match for source of traffic. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcSecureTag">src_secure_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>]]</code> | src_secure_tag block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcThreatIntelligences">src_threat_intelligences</a></code> | <code>typing.List[str]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source. |

---

##### `layer4_config`<sup>Required</sup> <a name="layer4_config" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.layer4Config"></a>

```python
layer4_config: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>]]

layer4_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#layer4_config ComputeRegionNetworkFirewallPolicyWithRules#layer4_config}

---

##### `dest_address_groups`<sup>Optional</sup> <a name="dest_address_groups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destAddressGroups"></a>

```python
dest_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#dest_address_groups ComputeRegionNetworkFirewallPolicyWithRules#dest_address_groups}

---

##### `dest_fqdns`<sup>Optional</sup> <a name="dest_fqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destFqdns"></a>

```python
dest_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#dest_fqdns ComputeRegionNetworkFirewallPolicyWithRules#dest_fqdns}

---

##### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Destination IP address range in CIDR format. Required for EGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#dest_ip_ranges ComputeRegionNetworkFirewallPolicyWithRules#dest_ip_ranges}

---

##### `dest_region_codes`<sup>Optional</sup> <a name="dest_region_codes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destRegionCodes"></a>

```python
dest_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of destination region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#dest_region_codes ComputeRegionNetworkFirewallPolicyWithRules#dest_region_codes}

---

##### `dest_threat_intelligences`<sup>Optional</sup> <a name="dest_threat_intelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destThreatIntelligences"></a>

```python
dest_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#dest_threat_intelligences ComputeRegionNetworkFirewallPolicyWithRules#dest_threat_intelligences}

---

##### `src_address_groups`<sup>Optional</sup> <a name="src_address_groups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcAddressGroups"></a>

```python
src_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#src_address_groups ComputeRegionNetworkFirewallPolicyWithRules#src_address_groups}

---

##### `src_fqdns`<sup>Optional</sup> <a name="src_fqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcFqdns"></a>

```python
src_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#src_fqdns ComputeRegionNetworkFirewallPolicyWithRules#src_fqdns}

---

##### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#src_ip_ranges ComputeRegionNetworkFirewallPolicyWithRules#src_ip_ranges}

---

##### `src_region_codes`<sup>Optional</sup> <a name="src_region_codes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcRegionCodes"></a>

```python
src_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#src_region_codes ComputeRegionNetworkFirewallPolicyWithRules#src_region_codes}

---

##### `src_secure_tag`<sup>Optional</sup> <a name="src_secure_tag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcSecureTag"></a>

```python
src_secure_tag: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>]]

src_secure_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#src_secure_tag ComputeRegionNetworkFirewallPolicyWithRules#src_secure_tag}

---

##### `src_threat_intelligences`<sup>Optional</sup> <a name="src_threat_intelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcThreatIntelligences"></a>

```python
src_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#src_threat_intelligences ComputeRegionNetworkFirewallPolicyWithRules#src_threat_intelligences}

---

### ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config <a name="ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config(
  ip_protocol: str,
  ports: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ports">ports</a></code> | <code>typing.List[str]</code> | An optional list of ports to which this rule applies. |

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The IP protocol to which this rule applies.

The protocol
type is required when creating a firewall rule.
This value can either be one of the following well
known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#ip_protocol ComputeRegionNetworkFirewallPolicyWithRules#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#ports ComputeRegionNetworkFirewallPolicyWithRules#ports}

---

### ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag <a name="ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag.property.name">name</a></code> | <code>str</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the secure tag, created with TagManager's TagValue API.

---

### ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag <a name="ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag.property.name">name</a></code> | <code>str</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the secure tag, created with TagManager's TagValue API.

---

### ComputeRegionNetworkFirewallPolicyWithRulesTimeouts <a name="ComputeRegionNetworkFirewallPolicyWithRulesTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#create ComputeRegionNetworkFirewallPolicyWithRules#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#delete ComputeRegionNetworkFirewallPolicyWithRules#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#update ComputeRegionNetworkFirewallPolicyWithRules#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#create ComputeRegionNetworkFirewallPolicyWithRules#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#delete ComputeRegionNetworkFirewallPolicyWithRules#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#update ComputeRegionNetworkFirewallPolicyWithRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config</a>

---


### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destAddressGroups">dest_address_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destFqdns">dest_fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destRegionCodes">dest_region_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destThreatIntelligences">dest_threat_intelligences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.layer4Config">layer4_config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcAddressGroups">src_address_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcFqdns">src_fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcRegionCodes">src_region_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcSecureTag">src_secure_tag</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcThreatIntelligences">src_threat_intelligences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dest_address_groups`<sup>Required</sup> <a name="dest_address_groups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destAddressGroups"></a>

```python
dest_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_fqdns`<sup>Required</sup> <a name="dest_fqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destFqdns"></a>

```python
dest_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_ip_ranges`<sup>Required</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_region_codes`<sup>Required</sup> <a name="dest_region_codes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destRegionCodes"></a>

```python
dest_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_threat_intelligences`<sup>Required</sup> <a name="dest_threat_intelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destThreatIntelligences"></a>

```python
dest_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `layer4_config`<sup>Required</sup> <a name="layer4_config" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.layer4Config"></a>

```python
layer4_config: ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList</a>

---

##### `src_address_groups`<sup>Required</sup> <a name="src_address_groups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcAddressGroups"></a>

```python
src_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_fqdns`<sup>Required</sup> <a name="src_fqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcFqdns"></a>

```python
src_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_region_codes`<sup>Required</sup> <a name="src_region_codes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcRegionCodes"></a>

```python
src_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_secure_tag`<sup>Required</sup> <a name="src_secure_tag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcSecureTag"></a>

```python
src_secure_tag: ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList</a>

---

##### `src_threat_intelligences`<sup>Required</sup> <a name="src_threat_intelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcThreatIntelligences"></a>

```python
src_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch</a>

---


### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag</a>

---


### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.enableLogging">enable_logging</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.securityProfileGroup">security_profile_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetSecureTag">target_secure_tag</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.tlsInspect">tls_inspect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.enableLogging"></a>

```python
enable_logging: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.match"></a>

```python
match: ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `security_profile_group`<sup>Required</sup> <a name="security_profile_group" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.securityProfileGroup"></a>

```python
security_profile_group: str
```

- *Type:* str

---

##### `target_secure_tag`<sup>Required</sup> <a name="target_secure_tag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetSecureTag"></a>

```python
target_secure_tag: ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList</a>

---

##### `target_service_accounts`<sup>Required</sup> <a name="target_service_accounts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetServiceAccounts"></a>

```python
target_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_inspect`<sup>Required</sup> <a name="tls_inspect" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.tlsInspect"></a>

```python
tls_inspect: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules</a>

---


### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference <a name="ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag</a>

---


### ComputeRegionNetworkFirewallPolicyWithRulesRuleList <a name="ComputeRegionNetworkFirewallPolicyWithRulesRuleList" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule">ComputeRegionNetworkFirewallPolicyWithRulesRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule">ComputeRegionNetworkFirewallPolicyWithRulesRule</a>]]

---


### ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList <a name="ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>]]

---


### ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference <a name="ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>]

---


### ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference <a name="ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config">put_layer4_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag">put_src_secure_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestAddressGroups">reset_dest_address_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestFqdns">reset_dest_fqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestIpRanges">reset_dest_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestRegionCodes">reset_dest_region_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestThreatIntelligences">reset_dest_threat_intelligences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcAddressGroups">reset_src_address_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcFqdns">reset_src_fqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcIpRanges">reset_src_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcRegionCodes">reset_src_region_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcSecureTag">reset_src_secure_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcThreatIntelligences">reset_src_threat_intelligences</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_layer4_config` <a name="put_layer4_config" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config"></a>

```python
def put_layer4_config(
  value: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>]]

---

##### `put_src_secure_tag` <a name="put_src_secure_tag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag"></a>

```python
def put_src_secure_tag(
  value: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>]]

---

##### `reset_dest_address_groups` <a name="reset_dest_address_groups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestAddressGroups"></a>

```python
def reset_dest_address_groups() -> None
```

##### `reset_dest_fqdns` <a name="reset_dest_fqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestFqdns"></a>

```python
def reset_dest_fqdns() -> None
```

##### `reset_dest_ip_ranges` <a name="reset_dest_ip_ranges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestIpRanges"></a>

```python
def reset_dest_ip_ranges() -> None
```

##### `reset_dest_region_codes` <a name="reset_dest_region_codes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestRegionCodes"></a>

```python
def reset_dest_region_codes() -> None
```

##### `reset_dest_threat_intelligences` <a name="reset_dest_threat_intelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestThreatIntelligences"></a>

```python
def reset_dest_threat_intelligences() -> None
```

##### `reset_src_address_groups` <a name="reset_src_address_groups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcAddressGroups"></a>

```python
def reset_src_address_groups() -> None
```

##### `reset_src_fqdns` <a name="reset_src_fqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcFqdns"></a>

```python
def reset_src_fqdns() -> None
```

##### `reset_src_ip_ranges` <a name="reset_src_ip_ranges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcIpRanges"></a>

```python
def reset_src_ip_ranges() -> None
```

##### `reset_src_region_codes` <a name="reset_src_region_codes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcRegionCodes"></a>

```python
def reset_src_region_codes() -> None
```

##### `reset_src_secure_tag` <a name="reset_src_secure_tag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcSecureTag"></a>

```python
def reset_src_secure_tag() -> None
```

##### `reset_src_threat_intelligences` <a name="reset_src_threat_intelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcThreatIntelligences"></a>

```python
def reset_src_threat_intelligences() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4Config">layer4_config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTag">src_secure_tag</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroupsInput">dest_address_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdnsInput">dest_fqdns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRangesInput">dest_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodesInput">dest_region_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligencesInput">dest_threat_intelligences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4ConfigInput">layer4_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroupsInput">src_address_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdnsInput">src_fqdns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRangesInput">src_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodesInput">src_region_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTagInput">src_secure_tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligencesInput">src_threat_intelligences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroups">dest_address_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdns">dest_fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRanges">dest_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodes">dest_region_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligences">dest_threat_intelligences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroups">src_address_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdns">src_fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRanges">src_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodes">src_region_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligences">src_threat_intelligences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `layer4_config`<sup>Required</sup> <a name="layer4_config" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4Config"></a>

```python
layer4_config: ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList</a>

---

##### `src_secure_tag`<sup>Required</sup> <a name="src_secure_tag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTag"></a>

```python
src_secure_tag: ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList</a>

---

##### `dest_address_groups_input`<sup>Optional</sup> <a name="dest_address_groups_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroupsInput"></a>

```python
dest_address_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_fqdns_input`<sup>Optional</sup> <a name="dest_fqdns_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdnsInput"></a>

```python
dest_fqdns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_ip_ranges_input`<sup>Optional</sup> <a name="dest_ip_ranges_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRangesInput"></a>

```python
dest_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_region_codes_input`<sup>Optional</sup> <a name="dest_region_codes_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodesInput"></a>

```python
dest_region_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_threat_intelligences_input`<sup>Optional</sup> <a name="dest_threat_intelligences_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligencesInput"></a>

```python
dest_threat_intelligences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `layer4_config_input`<sup>Optional</sup> <a name="layer4_config_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4ConfigInput"></a>

```python
layer4_config_input: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>]]

---

##### `src_address_groups_input`<sup>Optional</sup> <a name="src_address_groups_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroupsInput"></a>

```python
src_address_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_fqdns_input`<sup>Optional</sup> <a name="src_fqdns_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdnsInput"></a>

```python
src_fqdns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges_input`<sup>Optional</sup> <a name="src_ip_ranges_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRangesInput"></a>

```python
src_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_region_codes_input`<sup>Optional</sup> <a name="src_region_codes_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodesInput"></a>

```python
src_region_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_secure_tag_input`<sup>Optional</sup> <a name="src_secure_tag_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTagInput"></a>

```python
src_secure_tag_input: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>]]

---

##### `src_threat_intelligences_input`<sup>Optional</sup> <a name="src_threat_intelligences_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligencesInput"></a>

```python
src_threat_intelligences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_address_groups`<sup>Required</sup> <a name="dest_address_groups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroups"></a>

```python
dest_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_fqdns`<sup>Required</sup> <a name="dest_fqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdns"></a>

```python
dest_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_ip_ranges`<sup>Required</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRanges"></a>

```python
dest_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_region_codes`<sup>Required</sup> <a name="dest_region_codes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodes"></a>

```python
dest_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dest_threat_intelligences`<sup>Required</sup> <a name="dest_threat_intelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligences"></a>

```python
dest_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_address_groups`<sup>Required</sup> <a name="src_address_groups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroups"></a>

```python
src_address_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_fqdns`<sup>Required</sup> <a name="src_fqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdns"></a>

```python
src_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_ranges`<sup>Required</sup> <a name="src_ip_ranges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRanges"></a>

```python
src_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_region_codes`<sup>Required</sup> <a name="src_region_codes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodes"></a>

```python
src_region_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_threat_intelligences`<sup>Required</sup> <a name="src_threat_intelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligences"></a>

```python
src_threat_intelligences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch</a>

---


### ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList <a name="ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>]]

---


### ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference <a name="ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>]

---


### ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference <a name="ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag">put_target_secure_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetRuleName">reset_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetSecurityProfileGroup">reset_security_profile_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetSecureTag">reset_target_secure_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetServiceAccounts">reset_target_service_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetTlsInspect">reset_tls_inspect</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match` <a name="put_match" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch"></a>

```python
def put_match(
  layer4_config: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config]],
  dest_address_groups: typing.List[str] = None,
  dest_fqdns: typing.List[str] = None,
  dest_ip_ranges: typing.List[str] = None,
  dest_region_codes: typing.List[str] = None,
  dest_threat_intelligences: typing.List[str] = None,
  src_address_groups: typing.List[str] = None,
  src_fqdns: typing.List[str] = None,
  src_ip_ranges: typing.List[str] = None,
  src_region_codes: typing.List[str] = None,
  src_secure_tag: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag]] = None,
  src_threat_intelligences: typing.List[str] = None
) -> None
```

###### `layer4_config`<sup>Required</sup> <a name="layer4_config" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.layer4Config"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>]]

layer4_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#layer4_config ComputeRegionNetworkFirewallPolicyWithRules#layer4_config}

---

###### `dest_address_groups`<sup>Optional</sup> <a name="dest_address_groups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.destAddressGroups"></a>

- *Type:* typing.List[str]

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#dest_address_groups ComputeRegionNetworkFirewallPolicyWithRules#dest_address_groups}

---

###### `dest_fqdns`<sup>Optional</sup> <a name="dest_fqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.destFqdns"></a>

- *Type:* typing.List[str]

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#dest_fqdns ComputeRegionNetworkFirewallPolicyWithRules#dest_fqdns}

---

###### `dest_ip_ranges`<sup>Optional</sup> <a name="dest_ip_ranges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.destIpRanges"></a>

- *Type:* typing.List[str]

Destination IP address range in CIDR format. Required for EGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#dest_ip_ranges ComputeRegionNetworkFirewallPolicyWithRules#dest_ip_ranges}

---

###### `dest_region_codes`<sup>Optional</sup> <a name="dest_region_codes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.destRegionCodes"></a>

- *Type:* typing.List[str]

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of destination region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#dest_region_codes ComputeRegionNetworkFirewallPolicyWithRules#dest_region_codes}

---

###### `dest_threat_intelligences`<sup>Optional</sup> <a name="dest_threat_intelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.destThreatIntelligences"></a>

- *Type:* typing.List[str]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#dest_threat_intelligences ComputeRegionNetworkFirewallPolicyWithRules#dest_threat_intelligences}

---

###### `src_address_groups`<sup>Optional</sup> <a name="src_address_groups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.srcAddressGroups"></a>

- *Type:* typing.List[str]

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#src_address_groups ComputeRegionNetworkFirewallPolicyWithRules#src_address_groups}

---

###### `src_fqdns`<sup>Optional</sup> <a name="src_fqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.srcFqdns"></a>

- *Type:* typing.List[str]

Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#src_fqdns ComputeRegionNetworkFirewallPolicyWithRules#src_fqdns}

---

###### `src_ip_ranges`<sup>Optional</sup> <a name="src_ip_ranges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.srcIpRanges"></a>

- *Type:* typing.List[str]

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#src_ip_ranges ComputeRegionNetworkFirewallPolicyWithRules#src_ip_ranges}

---

###### `src_region_codes`<sup>Optional</sup> <a name="src_region_codes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.srcRegionCodes"></a>

- *Type:* typing.List[str]

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#src_region_codes ComputeRegionNetworkFirewallPolicyWithRules#src_region_codes}

---

###### `src_secure_tag`<sup>Optional</sup> <a name="src_secure_tag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.srcSecureTag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>]]

src_secure_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#src_secure_tag ComputeRegionNetworkFirewallPolicyWithRules#src_secure_tag}

---

###### `src_threat_intelligences`<sup>Optional</sup> <a name="src_threat_intelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.srcThreatIntelligences"></a>

- *Type:* typing.List[str]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_region_network_firewall_policy_with_rules#src_threat_intelligences ComputeRegionNetworkFirewallPolicyWithRules#src_threat_intelligences}

---

##### `put_target_secure_tag` <a name="put_target_secure_tag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag"></a>

```python
def put_target_secure_tag(
  value: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetRuleName"></a>

```python
def reset_rule_name() -> None
```

##### `reset_security_profile_group` <a name="reset_security_profile_group" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetSecurityProfileGroup"></a>

```python
def reset_security_profile_group() -> None
```

##### `reset_target_secure_tag` <a name="reset_target_secure_tag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetSecureTag"></a>

```python
def reset_target_secure_tag() -> None
```

##### `reset_target_service_accounts` <a name="reset_target_service_accounts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetServiceAccounts"></a>

```python
def reset_target_service_accounts() -> None
```

##### `reset_tls_inspect` <a name="reset_tls_inspect" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetTlsInspect"></a>

```python
def reset_tls_inspect() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTag">target_secure_tag</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList">ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroupInput">security_profile_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTagInput">target_secure_tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccountsInput">target_service_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspectInput">tls_inspect_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroup">security_profile_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccounts">target_service_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspect">tls_inspect</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule">ComputeRegionNetworkFirewallPolicyWithRulesRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.match"></a>

```python
match: ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference</a>

---

##### `target_secure_tag`<sup>Required</sup> <a name="target_secure_tag" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTag"></a>

```python
target_secure_tag: ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList">ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.matchInput"></a>

```python
match_input: ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch">ComputeRegionNetworkFirewallPolicyWithRulesRuleMatch</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `security_profile_group_input`<sup>Optional</sup> <a name="security_profile_group_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroupInput"></a>

```python
security_profile_group_input: str
```

- *Type:* str

---

##### `target_secure_tag_input`<sup>Optional</sup> <a name="target_secure_tag_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTagInput"></a>

```python
target_secure_tag_input: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>]]

---

##### `target_service_accounts_input`<sup>Optional</sup> <a name="target_service_accounts_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccountsInput"></a>

```python
target_service_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_inspect_input`<sup>Optional</sup> <a name="tls_inspect_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspectInput"></a>

```python
tls_inspect_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `security_profile_group`<sup>Required</sup> <a name="security_profile_group" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroup"></a>

```python
security_profile_group: str
```

- *Type:* str

---

##### `target_service_accounts`<sup>Required</sup> <a name="target_service_accounts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccounts"></a>

```python
target_service_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tls_inspect`<sup>Required</sup> <a name="tls_inspect" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspect"></a>

```python
tls_inspect: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionNetworkFirewallPolicyWithRulesRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRule">ComputeRegionNetworkFirewallPolicyWithRulesRule</a>]

---


### ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList <a name="ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>]]

---


### ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference <a name="ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">ComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>]

---


### ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference <a name="ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_network_firewall_policy_with_rules

computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts">ComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionNetworkFirewallPolicyWithRulesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyWithRules.ComputeRegionNetworkFirewallPolicyWithRulesTimeouts">ComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a>]

---



