# `networkManagementConnectivityTest` Submodule <a name="`networkManagementConnectivityTest` Submodule" id="@cdktf/provider-google.networkManagementConnectivityTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagementConnectivityTest <a name="NetworkManagementConnectivityTest" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test google_network_management_connectivity_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: NetworkManagementConnectivityTestDestination,
  name: str,
  source: NetworkManagementConnectivityTestSource,
  bypass_firewall_checks: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  protocol: str = None,
  related_projects: typing.List[str] = None,
  round_trip: typing.Union[bool, IResolvable] = None,
  timeouts: NetworkManagementConnectivityTestTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for the connectivity test. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.bypassFirewallChecks">bypass_firewall_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the analysis should skip firewall checking. Default value is false. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.description">description</a></code> | <code>str</code> | The user-supplied description of the Connectivity Test. Maximum of 512 characters. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#id NetworkManagementConnectivityTest#id}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#project NetworkManagementConnectivityTest#project}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | IP Protocol of the test. When not provided, "TCP" is assumed. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.relatedProjects">related_projects</a></code> | <code>typing.List[str]</code> | Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.roundTrip">round_trip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether run analysis for the return path from destination to source. Default value is false. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#destination NetworkManagementConnectivityTest#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.name"></a>

- *Type:* str

Unique name for the connectivity test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#name NetworkManagementConnectivityTest#name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#source NetworkManagementConnectivityTest#source}

---

##### `bypass_firewall_checks`<sup>Optional</sup> <a name="bypass_firewall_checks" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.bypassFirewallChecks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the analysis should skip firewall checking. Default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#bypass_firewall_checks NetworkManagementConnectivityTest#bypass_firewall_checks}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.description"></a>

- *Type:* str

The user-supplied description of the Connectivity Test. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#description NetworkManagementConnectivityTest#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#id NetworkManagementConnectivityTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#labels NetworkManagementConnectivityTest#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#project NetworkManagementConnectivityTest#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.protocol"></a>

- *Type:* str

IP Protocol of the test. When not provided, "TCP" is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#protocol NetworkManagementConnectivityTest#protocol}

---

##### `related_projects`<sup>Optional</sup> <a name="related_projects" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.relatedProjects"></a>

- *Type:* typing.List[str]

Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#related_projects NetworkManagementConnectivityTest#related_projects}

---

##### `round_trip`<sup>Optional</sup> <a name="round_trip" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.roundTrip"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether run analysis for the return path from destination to source. Default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#round_trip NetworkManagementConnectivityTest#round_trip}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#timeouts NetworkManagementConnectivityTest#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetBypassFirewallChecks">reset_bypass_firewall_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetRelatedProjects">reset_related_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetRoundTrip">reset_round_trip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination` <a name="put_destination" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination"></a>

```python
def put_destination(
  cloud_sql_instance: str = None,
  forwarding_rule: str = None,
  fqdn: str = None,
  gke_master_cluster: str = None,
  instance: str = None,
  ip_address: str = None,
  network: str = None,
  port: typing.Union[int, float] = None,
  project_id: str = None,
  redis_cluster: str = None,
  redis_instance: str = None
) -> None
```

###### `cloud_sql_instance`<sup>Optional</sup> <a name="cloud_sql_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination.parameter.cloudSqlInstance"></a>

- *Type:* str

A Cloud SQL instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#cloud_sql_instance NetworkManagementConnectivityTest#cloud_sql_instance}

---

###### `forwarding_rule`<sup>Optional</sup> <a name="forwarding_rule" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination.parameter.forwardingRule"></a>

- *Type:* str

Forwarding rule URI. Forwarding rules are frontends for load balancers, PSC endpoints, and Protocol Forwarding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#forwarding_rule NetworkManagementConnectivityTest#forwarding_rule}

---

###### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination.parameter.fqdn"></a>

- *Type:* str

A DNS endpoint of Google Kubernetes Engine cluster control plane.

Requires gke_master_cluster to be set, can't be used simultaneoulsly with
ip_address or network. Applicable only to destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#fqdn NetworkManagementConnectivityTest#fqdn}

---

###### `gke_master_cluster`<sup>Optional</sup> <a name="gke_master_cluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination.parameter.gkeMasterCluster"></a>

- *Type:* str

A cluster URI for Google Kubernetes Engine cluster control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#gke_master_cluster NetworkManagementConnectivityTest#gke_master_cluster}

---

###### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination.parameter.instance"></a>

- *Type:* str

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#instance NetworkManagementConnectivityTest#instance}

---

###### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination.parameter.ipAddress"></a>

- *Type:* str

The IP address of the endpoint, which can be an external or internal IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#ip_address NetworkManagementConnectivityTest#ip_address}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination.parameter.network"></a>

- *Type:* str

A VPC network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#network NetworkManagementConnectivityTest#network}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination.parameter.port"></a>

- *Type:* typing.Union[int, float]

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#port NetworkManagementConnectivityTest#port}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination.parameter.projectId"></a>

- *Type:* str

Project ID where the endpoint is located.

The project ID can be derived from the URI if you provide a endpoint or
network URI.
The following are two cases where you may need to provide the project ID:

1. Only the IP address is specified, and the IP address is within a Google
   Cloud project.
2. When you are using Shared VPC and the IP address that you provide is
   from the service project. In this case, the network that the IP address
   resides in is defined in the host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#project_id NetworkManagementConnectivityTest#project_id}

---

###### `redis_cluster`<sup>Optional</sup> <a name="redis_cluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination.parameter.redisCluster"></a>

- *Type:* str

A Redis Cluster URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#redis_cluster NetworkManagementConnectivityTest#redis_cluster}

---

###### `redis_instance`<sup>Optional</sup> <a name="redis_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putDestination.parameter.redisInstance"></a>

- *Type:* str

A Redis Instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#redis_instance NetworkManagementConnectivityTest#redis_instance}

---

##### `put_source` <a name="put_source" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource"></a>

```python
def put_source(
  app_engine_version: NetworkManagementConnectivityTestSourceAppEngineVersion = None,
  cloud_function: NetworkManagementConnectivityTestSourceCloudFunction = None,
  cloud_run_revision: NetworkManagementConnectivityTestSourceCloudRunRevision = None,
  cloud_sql_instance: str = None,
  gke_master_cluster: str = None,
  instance: str = None,
  ip_address: str = None,
  network: str = None,
  network_type: str = None,
  port: typing.Union[int, float] = None,
  project_id: str = None
) -> None
```

###### `app_engine_version`<sup>Optional</sup> <a name="app_engine_version" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource.parameter.appEngineVersion"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a>

app_engine_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#app_engine_version NetworkManagementConnectivityTest#app_engine_version}

---

###### `cloud_function`<sup>Optional</sup> <a name="cloud_function" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource.parameter.cloudFunction"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a>

cloud_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#cloud_function NetworkManagementConnectivityTest#cloud_function}

---

###### `cloud_run_revision`<sup>Optional</sup> <a name="cloud_run_revision" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource.parameter.cloudRunRevision"></a>

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a>

cloud_run_revision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#cloud_run_revision NetworkManagementConnectivityTest#cloud_run_revision}

---

###### `cloud_sql_instance`<sup>Optional</sup> <a name="cloud_sql_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource.parameter.cloudSqlInstance"></a>

- *Type:* str

A Cloud SQL instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#cloud_sql_instance NetworkManagementConnectivityTest#cloud_sql_instance}

---

###### `gke_master_cluster`<sup>Optional</sup> <a name="gke_master_cluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource.parameter.gkeMasterCluster"></a>

- *Type:* str

A cluster URI for Google Kubernetes Engine cluster control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#gke_master_cluster NetworkManagementConnectivityTest#gke_master_cluster}

---

###### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource.parameter.instance"></a>

- *Type:* str

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#instance NetworkManagementConnectivityTest#instance}

---

###### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource.parameter.ipAddress"></a>

- *Type:* str

The IP address of the endpoint, which can be an external or internal IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#ip_address NetworkManagementConnectivityTest#ip_address}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource.parameter.network"></a>

- *Type:* str

A VPC network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#network NetworkManagementConnectivityTest#network}

---

###### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource.parameter.networkType"></a>

- *Type:* str

Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#network_type NetworkManagementConnectivityTest#network_type}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource.parameter.port"></a>

- *Type:* typing.Union[int, float]

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#port NetworkManagementConnectivityTest#port}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putSource.parameter.projectId"></a>

- *Type:* str

Project ID where the endpoint is located.

The project ID can be derived from the URI if you provide a endpoint or
network URI.
The following are two cases where you may need to provide the project ID:

1. Only the IP address is specified, and the IP address is within a Google
   Cloud project.
2. When you are using Shared VPC and the IP address that you provide is
   from the service project. In this case, the network that the IP address
   resides in is defined in the host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#project_id NetworkManagementConnectivityTest#project_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#create NetworkManagementConnectivityTest#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#delete NetworkManagementConnectivityTest#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#update NetworkManagementConnectivityTest#update}.

---

##### `reset_bypass_firewall_checks` <a name="reset_bypass_firewall_checks" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetBypassFirewallChecks"></a>

```python
def reset_bypass_firewall_checks() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_related_projects` <a name="reset_related_projects" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetRelatedProjects"></a>

```python
def reset_related_projects() -> None
```

##### `reset_round_trip` <a name="reset_round_trip" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetRoundTrip"></a>

```python
def reset_round_trip() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkManagementConnectivityTest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkManagementConnectivityTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkManagementConnectivityTest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkManagementConnectivityTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagementConnectivityTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference">NetworkManagementConnectivityTestDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference">NetworkManagementConnectivityTestSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference">NetworkManagementConnectivityTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.bypassFirewallChecksInput">bypass_firewall_checks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.relatedProjectsInput">related_projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.roundTripInput">round_trip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.sourceInput">source_input</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.bypassFirewallChecks">bypass_firewall_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.relatedProjects">related_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.roundTrip">round_trip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.destination"></a>

```python
destination: NetworkManagementConnectivityTestDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference">NetworkManagementConnectivityTestDestinationOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.source"></a>

```python
source: NetworkManagementConnectivityTestSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference">NetworkManagementConnectivityTestSourceOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.timeouts"></a>

```python
timeouts: NetworkManagementConnectivityTestTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference">NetworkManagementConnectivityTestTimeoutsOutputReference</a>

---

##### `bypass_firewall_checks_input`<sup>Optional</sup> <a name="bypass_firewall_checks_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.bypassFirewallChecksInput"></a>

```python
bypass_firewall_checks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.destinationInput"></a>

```python
destination_input: NetworkManagementConnectivityTestDestination
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `related_projects_input`<sup>Optional</sup> <a name="related_projects_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.relatedProjectsInput"></a>

```python
related_projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `round_trip_input`<sup>Optional</sup> <a name="round_trip_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.roundTripInput"></a>

```python
round_trip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.sourceInput"></a>

```python
source_input: NetworkManagementConnectivityTestSource
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkManagementConnectivityTestTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a>]

---

##### `bypass_firewall_checks`<sup>Required</sup> <a name="bypass_firewall_checks" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.bypassFirewallChecks"></a>

```python
bypass_firewall_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `related_projects`<sup>Required</sup> <a name="related_projects" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.relatedProjects"></a>

```python
related_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `round_trip`<sup>Required</sup> <a name="round_trip" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.roundTrip"></a>

```python
round_trip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagementConnectivityTestConfig <a name="NetworkManagementConnectivityTestConfig" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: NetworkManagementConnectivityTestDestination,
  name: str,
  source: NetworkManagementConnectivityTestSource,
  bypass_firewall_checks: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  protocol: str = None,
  related_projects: typing.List[str] = None,
  round_trip: typing.Union[bool, IResolvable] = None,
  timeouts: NetworkManagementConnectivityTestTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.name">name</a></code> | <code>str</code> | Unique name for the connectivity test. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.bypassFirewallChecks">bypass_firewall_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the analysis should skip firewall checking. Default value is false. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.description">description</a></code> | <code>str</code> | The user-supplied description of the Connectivity Test. Maximum of 512 characters. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#id NetworkManagementConnectivityTest#id}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#project NetworkManagementConnectivityTest#project}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.protocol">protocol</a></code> | <code>str</code> | IP Protocol of the test. When not provided, "TCP" is assumed. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.relatedProjects">related_projects</a></code> | <code>typing.List[str]</code> | Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.roundTrip">round_trip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether run analysis for the return path from destination to source. Default value is false. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.destination"></a>

```python
destination: NetworkManagementConnectivityTestDestination
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#destination NetworkManagementConnectivityTest#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for the connectivity test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#name NetworkManagementConnectivityTest#name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.source"></a>

```python
source: NetworkManagementConnectivityTestSource
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#source NetworkManagementConnectivityTest#source}

---

##### `bypass_firewall_checks`<sup>Optional</sup> <a name="bypass_firewall_checks" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.bypassFirewallChecks"></a>

```python
bypass_firewall_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the analysis should skip firewall checking. Default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#bypass_firewall_checks NetworkManagementConnectivityTest#bypass_firewall_checks}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The user-supplied description of the Connectivity Test. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#description NetworkManagementConnectivityTest#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#id NetworkManagementConnectivityTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#labels NetworkManagementConnectivityTest#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#project NetworkManagementConnectivityTest#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

IP Protocol of the test. When not provided, "TCP" is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#protocol NetworkManagementConnectivityTest#protocol}

---

##### `related_projects`<sup>Optional</sup> <a name="related_projects" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.relatedProjects"></a>

```python
related_projects: typing.List[str]
```

- *Type:* typing.List[str]

Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#related_projects NetworkManagementConnectivityTest#related_projects}

---

##### `round_trip`<sup>Optional</sup> <a name="round_trip" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.roundTrip"></a>

```python
round_trip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether run analysis for the return path from destination to source. Default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#round_trip NetworkManagementConnectivityTest#round_trip}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestConfig.property.timeouts"></a>

```python
timeouts: NetworkManagementConnectivityTestTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#timeouts NetworkManagementConnectivityTest#timeouts}

---

### NetworkManagementConnectivityTestDestination <a name="NetworkManagementConnectivityTestDestination" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination(
  cloud_sql_instance: str = None,
  forwarding_rule: str = None,
  fqdn: str = None,
  gke_master_cluster: str = None,
  instance: str = None,
  ip_address: str = None,
  network: str = None,
  port: typing.Union[int, float] = None,
  project_id: str = None,
  redis_cluster: str = None,
  redis_instance: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code>str</code> | A Cloud SQL instance URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.forwardingRule">forwarding_rule</a></code> | <code>str</code> | Forwarding rule URI. Forwarding rules are frontends for load balancers, PSC endpoints, and Protocol Forwarding. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.fqdn">fqdn</a></code> | <code>str</code> | A DNS endpoint of Google Kubernetes Engine cluster control plane. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.gkeMasterCluster">gke_master_cluster</a></code> | <code>str</code> | A cluster URI for Google Kubernetes Engine cluster control plane. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.instance">instance</a></code> | <code>str</code> | A Compute Engine instance URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.ipAddress">ip_address</a></code> | <code>str</code> | The IP address of the endpoint, which can be an external or internal IP. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.network">network</a></code> | <code>str</code> | A VPC network URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.projectId">project_id</a></code> | <code>str</code> | Project ID where the endpoint is located. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.redisCluster">redis_cluster</a></code> | <code>str</code> | A Redis Cluster URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.redisInstance">redis_instance</a></code> | <code>str</code> | A Redis Instance URI. |

---

##### `cloud_sql_instance`<sup>Optional</sup> <a name="cloud_sql_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: str
```

- *Type:* str

A Cloud SQL instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#cloud_sql_instance NetworkManagementConnectivityTest#cloud_sql_instance}

---

##### `forwarding_rule`<sup>Optional</sup> <a name="forwarding_rule" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.forwardingRule"></a>

```python
forwarding_rule: str
```

- *Type:* str

Forwarding rule URI. Forwarding rules are frontends for load balancers, PSC endpoints, and Protocol Forwarding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#forwarding_rule NetworkManagementConnectivityTest#forwarding_rule}

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

A DNS endpoint of Google Kubernetes Engine cluster control plane.

Requires gke_master_cluster to be set, can't be used simultaneoulsly with
ip_address or network. Applicable only to destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#fqdn NetworkManagementConnectivityTest#fqdn}

---

##### `gke_master_cluster`<sup>Optional</sup> <a name="gke_master_cluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.gkeMasterCluster"></a>

```python
gke_master_cluster: str
```

- *Type:* str

A cluster URI for Google Kubernetes Engine cluster control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#gke_master_cluster NetworkManagementConnectivityTest#gke_master_cluster}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.instance"></a>

```python
instance: str
```

- *Type:* str

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#instance NetworkManagementConnectivityTest#instance}

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The IP address of the endpoint, which can be an external or internal IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#ip_address NetworkManagementConnectivityTest#ip_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.network"></a>

```python
network: str
```

- *Type:* str

A VPC network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#network NetworkManagementConnectivityTest#network}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#port NetworkManagementConnectivityTest#port}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Project ID where the endpoint is located.

The project ID can be derived from the URI if you provide a endpoint or
network URI.
The following are two cases where you may need to provide the project ID:

1. Only the IP address is specified, and the IP address is within a Google
   Cloud project.
2. When you are using Shared VPC and the IP address that you provide is
   from the service project. In this case, the network that the IP address
   resides in is defined in the host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#project_id NetworkManagementConnectivityTest#project_id}

---

##### `redis_cluster`<sup>Optional</sup> <a name="redis_cluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.redisCluster"></a>

```python
redis_cluster: str
```

- *Type:* str

A Redis Cluster URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#redis_cluster NetworkManagementConnectivityTest#redis_cluster}

---

##### `redis_instance`<sup>Optional</sup> <a name="redis_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination.property.redisInstance"></a>

```python
redis_instance: str
```

- *Type:* str

A Redis Instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#redis_instance NetworkManagementConnectivityTest#redis_instance}

---

### NetworkManagementConnectivityTestSource <a name="NetworkManagementConnectivityTestSource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTestSource(
  app_engine_version: NetworkManagementConnectivityTestSourceAppEngineVersion = None,
  cloud_function: NetworkManagementConnectivityTestSourceCloudFunction = None,
  cloud_run_revision: NetworkManagementConnectivityTestSourceCloudRunRevision = None,
  cloud_sql_instance: str = None,
  gke_master_cluster: str = None,
  instance: str = None,
  ip_address: str = None,
  network: str = None,
  network_type: str = None,
  port: typing.Union[int, float] = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.appEngineVersion">app_engine_version</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a></code> | app_engine_version block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.cloudFunction">cloud_function</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a></code> | cloud_function block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.cloudRunRevision">cloud_run_revision</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a></code> | cloud_run_revision block. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code>str</code> | A Cloud SQL instance URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.gkeMasterCluster">gke_master_cluster</a></code> | <code>str</code> | A cluster URI for Google Kubernetes Engine cluster control plane. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.instance">instance</a></code> | <code>str</code> | A Compute Engine instance URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.ipAddress">ip_address</a></code> | <code>str</code> | The IP address of the endpoint, which can be an external or internal IP. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.network">network</a></code> | <code>str</code> | A VPC network URI. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.networkType">network_type</a></code> | <code>str</code> | Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"]. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.projectId">project_id</a></code> | <code>str</code> | Project ID where the endpoint is located. |

---

##### `app_engine_version`<sup>Optional</sup> <a name="app_engine_version" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.appEngineVersion"></a>

```python
app_engine_version: NetworkManagementConnectivityTestSourceAppEngineVersion
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a>

app_engine_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#app_engine_version NetworkManagementConnectivityTest#app_engine_version}

---

##### `cloud_function`<sup>Optional</sup> <a name="cloud_function" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.cloudFunction"></a>

```python
cloud_function: NetworkManagementConnectivityTestSourceCloudFunction
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a>

cloud_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#cloud_function NetworkManagementConnectivityTest#cloud_function}

---

##### `cloud_run_revision`<sup>Optional</sup> <a name="cloud_run_revision" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.cloudRunRevision"></a>

```python
cloud_run_revision: NetworkManagementConnectivityTestSourceCloudRunRevision
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a>

cloud_run_revision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#cloud_run_revision NetworkManagementConnectivityTest#cloud_run_revision}

---

##### `cloud_sql_instance`<sup>Optional</sup> <a name="cloud_sql_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: str
```

- *Type:* str

A Cloud SQL instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#cloud_sql_instance NetworkManagementConnectivityTest#cloud_sql_instance}

---

##### `gke_master_cluster`<sup>Optional</sup> <a name="gke_master_cluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.gkeMasterCluster"></a>

```python
gke_master_cluster: str
```

- *Type:* str

A cluster URI for Google Kubernetes Engine cluster control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#gke_master_cluster NetworkManagementConnectivityTest#gke_master_cluster}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.instance"></a>

```python
instance: str
```

- *Type:* str

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#instance NetworkManagementConnectivityTest#instance}

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The IP address of the endpoint, which can be an external or internal IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#ip_address NetworkManagementConnectivityTest#ip_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.network"></a>

```python
network: str
```

- *Type:* str

A VPC network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#network NetworkManagementConnectivityTest#network}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#network_type NetworkManagementConnectivityTest#network_type}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#port NetworkManagementConnectivityTest#port}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Project ID where the endpoint is located.

The project ID can be derived from the URI if you provide a endpoint or
network URI.
The following are two cases where you may need to provide the project ID:

1. Only the IP address is specified, and the IP address is within a Google
   Cloud project.
2. When you are using Shared VPC and the IP address that you provide is
   from the service project. In this case, the network that the IP address
   resides in is defined in the host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#project_id NetworkManagementConnectivityTest#project_id}

---

### NetworkManagementConnectivityTestSourceAppEngineVersion <a name="NetworkManagementConnectivityTestSourceAppEngineVersion" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion.property.uri">uri</a></code> | <code>str</code> | An App Engine service version name. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion.property.uri"></a>

```python
uri: str
```

- *Type:* str

An App Engine service version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#uri NetworkManagementConnectivityTest#uri}

---

### NetworkManagementConnectivityTestSourceCloudFunction <a name="NetworkManagementConnectivityTestSourceCloudFunction" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction.property.uri">uri</a></code> | <code>str</code> | A Cloud Function name. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction.property.uri"></a>

```python
uri: str
```

- *Type:* str

A Cloud Function name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#uri NetworkManagementConnectivityTest#uri}

---

### NetworkManagementConnectivityTestSourceCloudRunRevision <a name="NetworkManagementConnectivityTestSourceCloudRunRevision" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision.property.uri">uri</a></code> | <code>str</code> | A Cloud Run revision URI. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision.property.uri"></a>

```python
uri: str
```

- *Type:* str

A Cloud Run revision URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#uri NetworkManagementConnectivityTest#uri}

---

### NetworkManagementConnectivityTestTimeouts <a name="NetworkManagementConnectivityTestTimeouts" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#create NetworkManagementConnectivityTest#create}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#delete NetworkManagementConnectivityTest#delete}. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#update NetworkManagementConnectivityTest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#create NetworkManagementConnectivityTest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#delete NetworkManagementConnectivityTest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#update NetworkManagementConnectivityTest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagementConnectivityTestDestinationOutputReference <a name="NetworkManagementConnectivityTestDestinationOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetCloudSqlInstance">reset_cloud_sql_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetForwardingRule">reset_forwarding_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetFqdn">reset_fqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetGkeMasterCluster">reset_gke_master_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetInstance">reset_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetRedisCluster">reset_redis_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetRedisInstance">reset_redis_instance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloud_sql_instance` <a name="reset_cloud_sql_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetCloudSqlInstance"></a>

```python
def reset_cloud_sql_instance() -> None
```

##### `reset_forwarding_rule` <a name="reset_forwarding_rule" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetForwardingRule"></a>

```python
def reset_forwarding_rule() -> None
```

##### `reset_fqdn` <a name="reset_fqdn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetFqdn"></a>

```python
def reset_fqdn() -> None
```

##### `reset_gke_master_cluster` <a name="reset_gke_master_cluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetGkeMasterCluster"></a>

```python
def reset_gke_master_cluster() -> None
```

##### `reset_instance` <a name="reset_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetInstance"></a>

```python
def reset_instance() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_redis_cluster` <a name="reset_redis_cluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetRedisCluster"></a>

```python
def reset_redis_cluster() -> None
```

##### `reset_redis_instance` <a name="reset_redis_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.resetRedisInstance"></a>

```python
def reset_redis_instance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.cloudSqlInstanceInput">cloud_sql_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.forwardingRuleInput">forwarding_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.gkeMasterClusterInput">gke_master_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisClusterInput">redis_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisInstanceInput">redis_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.forwardingRule">forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.gkeMasterCluster">gke_master_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisCluster">redis_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisInstance">redis_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_sql_instance_input`<sup>Optional</sup> <a name="cloud_sql_instance_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.cloudSqlInstanceInput"></a>

```python
cloud_sql_instance_input: str
```

- *Type:* str

---

##### `forwarding_rule_input`<sup>Optional</sup> <a name="forwarding_rule_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.forwardingRuleInput"></a>

```python
forwarding_rule_input: str
```

- *Type:* str

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `gke_master_cluster_input`<sup>Optional</sup> <a name="gke_master_cluster_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.gkeMasterClusterInput"></a>

```python
gke_master_cluster_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `redis_cluster_input`<sup>Optional</sup> <a name="redis_cluster_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisClusterInput"></a>

```python
redis_cluster_input: str
```

- *Type:* str

---

##### `redis_instance_input`<sup>Optional</sup> <a name="redis_instance_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisInstanceInput"></a>

```python
redis_instance_input: str
```

- *Type:* str

---

##### `cloud_sql_instance`<sup>Required</sup> <a name="cloud_sql_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: str
```

- *Type:* str

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.forwardingRule"></a>

```python
forwarding_rule: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `gke_master_cluster`<sup>Required</sup> <a name="gke_master_cluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.gkeMasterCluster"></a>

```python
gke_master_cluster: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `redis_cluster`<sup>Required</sup> <a name="redis_cluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisCluster"></a>

```python
redis_cluster: str
```

- *Type:* str

---

##### `redis_instance`<sup>Required</sup> <a name="redis_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.redisInstance"></a>

```python
redis_instance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestinationOutputReference.property.internalValue"></a>

```python
internal_value: NetworkManagementConnectivityTestDestination
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestDestination">NetworkManagementConnectivityTestDestination</a>

---


### NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference <a name="NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.internalValue"></a>

```python
internal_value: NetworkManagementConnectivityTestSourceAppEngineVersion
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a>

---


### NetworkManagementConnectivityTestSourceCloudFunctionOutputReference <a name="NetworkManagementConnectivityTestSourceCloudFunctionOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.internalValue"></a>

```python
internal_value: NetworkManagementConnectivityTestSourceCloudFunction
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a>

---


### NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference <a name="NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.internalValue"></a>

```python
internal_value: NetworkManagementConnectivityTestSourceCloudRunRevision
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a>

---


### NetworkManagementConnectivityTestSourceOutputReference <a name="NetworkManagementConnectivityTestSourceOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putAppEngineVersion">put_app_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putCloudFunction">put_cloud_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putCloudRunRevision">put_cloud_run_revision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetAppEngineVersion">reset_app_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetCloudFunction">reset_cloud_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetCloudRunRevision">reset_cloud_run_revision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetCloudSqlInstance">reset_cloud_sql_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetGkeMasterCluster">reset_gke_master_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetInstance">reset_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_app_engine_version` <a name="put_app_engine_version" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putAppEngineVersion"></a>

```python
def put_app_engine_version(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putAppEngineVersion.parameter.uri"></a>

- *Type:* str

An App Engine service version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#uri NetworkManagementConnectivityTest#uri}

---

##### `put_cloud_function` <a name="put_cloud_function" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putCloudFunction"></a>

```python
def put_cloud_function(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putCloudFunction.parameter.uri"></a>

- *Type:* str

A Cloud Function name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#uri NetworkManagementConnectivityTest#uri}

---

##### `put_cloud_run_revision` <a name="put_cloud_run_revision" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putCloudRunRevision"></a>

```python
def put_cloud_run_revision(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.putCloudRunRevision.parameter.uri"></a>

- *Type:* str

A Cloud Run revision URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_management_connectivity_test#uri NetworkManagementConnectivityTest#uri}

---

##### `reset_app_engine_version` <a name="reset_app_engine_version" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetAppEngineVersion"></a>

```python
def reset_app_engine_version() -> None
```

##### `reset_cloud_function` <a name="reset_cloud_function" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetCloudFunction"></a>

```python
def reset_cloud_function() -> None
```

##### `reset_cloud_run_revision` <a name="reset_cloud_run_revision" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetCloudRunRevision"></a>

```python
def reset_cloud_run_revision() -> None
```

##### `reset_cloud_sql_instance` <a name="reset_cloud_sql_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetCloudSqlInstance"></a>

```python
def reset_cloud_sql_instance() -> None
```

##### `reset_gke_master_cluster` <a name="reset_gke_master_cluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetGkeMasterCluster"></a>

```python
def reset_gke_master_cluster() -> None
```

##### `reset_instance` <a name="reset_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetInstance"></a>

```python
def reset_instance() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.appEngineVersion">app_engine_version</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference">NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudFunction">cloud_function</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference">NetworkManagementConnectivityTestSourceCloudFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudRunRevision">cloud_run_revision</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference">NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.appEngineVersionInput">app_engine_version_input</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudFunctionInput">cloud_function_input</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudRunRevisionInput">cloud_run_revision_input</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudSqlInstanceInput">cloud_sql_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.gkeMasterClusterInput">gke_master_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.gkeMasterCluster">gke_master_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_engine_version`<sup>Required</sup> <a name="app_engine_version" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.appEngineVersion"></a>

```python
app_engine_version: NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference">NetworkManagementConnectivityTestSourceAppEngineVersionOutputReference</a>

---

##### `cloud_function`<sup>Required</sup> <a name="cloud_function" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudFunction"></a>

```python
cloud_function: NetworkManagementConnectivityTestSourceCloudFunctionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunctionOutputReference">NetworkManagementConnectivityTestSourceCloudFunctionOutputReference</a>

---

##### `cloud_run_revision`<sup>Required</sup> <a name="cloud_run_revision" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudRunRevision"></a>

```python
cloud_run_revision: NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference">NetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference</a>

---

##### `app_engine_version_input`<sup>Optional</sup> <a name="app_engine_version_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.appEngineVersionInput"></a>

```python
app_engine_version_input: NetworkManagementConnectivityTestSourceAppEngineVersion
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceAppEngineVersion">NetworkManagementConnectivityTestSourceAppEngineVersion</a>

---

##### `cloud_function_input`<sup>Optional</sup> <a name="cloud_function_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudFunctionInput"></a>

```python
cloud_function_input: NetworkManagementConnectivityTestSourceCloudFunction
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudFunction">NetworkManagementConnectivityTestSourceCloudFunction</a>

---

##### `cloud_run_revision_input`<sup>Optional</sup> <a name="cloud_run_revision_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudRunRevisionInput"></a>

```python
cloud_run_revision_input: NetworkManagementConnectivityTestSourceCloudRunRevision
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceCloudRunRevision">NetworkManagementConnectivityTestSourceCloudRunRevision</a>

---

##### `cloud_sql_instance_input`<sup>Optional</sup> <a name="cloud_sql_instance_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudSqlInstanceInput"></a>

```python
cloud_sql_instance_input: str
```

- *Type:* str

---

##### `gke_master_cluster_input`<sup>Optional</sup> <a name="gke_master_cluster_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.gkeMasterClusterInput"></a>

```python
gke_master_cluster_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `cloud_sql_instance`<sup>Required</sup> <a name="cloud_sql_instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: str
```

- *Type:* str

---

##### `gke_master_cluster`<sup>Required</sup> <a name="gke_master_cluster" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.gkeMasterCluster"></a>

```python
gke_master_cluster: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSourceOutputReference.property.internalValue"></a>

```python
internal_value: NetworkManagementConnectivityTestSource
```

- *Type:* <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestSource">NetworkManagementConnectivityTestSource</a>

---


### NetworkManagementConnectivityTestTimeoutsOutputReference <a name="NetworkManagementConnectivityTestTimeoutsOutputReference" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_management_connectivity_test

networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkManagementConnectivityTestTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkManagementConnectivityTest.NetworkManagementConnectivityTestTimeouts">NetworkManagementConnectivityTestTimeouts</a>]

---



