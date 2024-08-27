# `networkConnectivityInternalRange` Submodule <a name="`networkConnectivityInternalRange` Submodule" id="@cdktf/provider-google.networkConnectivityInternalRange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityInternalRange <a name="NetworkConnectivityInternalRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range google_network_connectivity_internal_range}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_internal_range

networkConnectivityInternalRange.NetworkConnectivityInternalRange(
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
  peering: str,
  usage: str,
  description: str = None,
  id: str = None,
  ip_cidr_range: str = None,
  labels: typing.Mapping[str] = None,
  overlaps: typing.List[str] = None,
  prefix_length: typing.Union[int, float] = None,
  project: str = None,
  target_cidr_range: typing.List[str] = None,
  timeouts: NetworkConnectivityInternalRangeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.network">network</a></code> | <code>str</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.peering">peering</a></code> | <code>str</code> | The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.usage">usage</a></code> | <code>str</code> | The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#id NetworkConnectivityInternalRange#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The IP range that this internal range defines. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.overlaps">overlaps</a></code> | <code>typing.List[str]</code> | Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | An alternate to ipCidrRange. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#project NetworkConnectivityInternalRange#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.targetCidrRange">target_cidr_range</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.name"></a>

- *Type:* str

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#name NetworkConnectivityInternalRange#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.network"></a>

- *Type:* str

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#network NetworkConnectivityInternalRange#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.peering"></a>

- *Type:* str

The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#peering NetworkConnectivityInternalRange#peering}

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.usage"></a>

- *Type:* str

The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#usage NetworkConnectivityInternalRange#usage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#description NetworkConnectivityInternalRange#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#id NetworkConnectivityInternalRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_cidr_range`<sup>Optional</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.ipCidrRange"></a>

- *Type:* str

The IP range that this internal range defines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#ip_cidr_range NetworkConnectivityInternalRange#ip_cidr_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#labels NetworkConnectivityInternalRange#labels}

---

##### `overlaps`<sup>Optional</sup> <a name="overlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.overlaps"></a>

- *Type:* typing.List[str]

Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#overlaps NetworkConnectivityInternalRange#overlaps}

---

##### `prefix_length`<sup>Optional</sup> <a name="prefix_length" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.prefixLength"></a>

- *Type:* typing.Union[int, float]

An alternate to ipCidrRange.

Can be set when trying to create a reservation that automatically finds a free range of the given size.
If both ipCidrRange and prefixLength are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#prefix_length NetworkConnectivityInternalRange#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#project NetworkConnectivityInternalRange#project}.

---

##### `target_cidr_range`<sup>Optional</sup> <a name="target_cidr_range" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.targetCidrRange"></a>

- *Type:* typing.List[str]

Optional.

Can be set to narrow down or pick a different address space while searching for a free range.
If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#target_cidr_range NetworkConnectivityInternalRange#target_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#timeouts NetworkConnectivityInternalRange#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetIpCidrRange">reset_ip_cidr_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverlaps">reset_overlaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetPrefixLength">reset_prefix_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTargetCidrRange">reset_target_cidr_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#create NetworkConnectivityInternalRange#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#delete NetworkConnectivityInternalRange#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#update NetworkConnectivityInternalRange#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_cidr_range` <a name="reset_ip_cidr_range" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetIpCidrRange"></a>

```python
def reset_ip_cidr_range() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_overlaps` <a name="reset_overlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverlaps"></a>

```python
def reset_overlaps() -> None
```

##### `reset_prefix_length` <a name="reset_prefix_length" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetPrefixLength"></a>

```python
def reset_prefix_length() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_target_cidr_range` <a name="reset_target_cidr_range" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTargetCidrRange"></a>

```python
def reset_target_cidr_range() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_internal_range

networkConnectivityInternalRange.NetworkConnectivityInternalRange.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_internal_range

networkConnectivityInternalRange.NetworkConnectivityInternalRange.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_internal_range

networkConnectivityInternalRange.NetworkConnectivityInternalRange.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_internal_range

networkConnectivityInternalRange.NetworkConnectivityInternalRange.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkConnectivityInternalRange to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkConnectivityInternalRange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityInternalRange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference">NetworkConnectivityInternalRangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRangeInput">ip_cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlapsInput">overlaps_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peeringInput">peering_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLengthInput">prefix_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRangeInput">target_cidr_range_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usageInput">usage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlaps">overlaps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peering">peering</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRange">target_cidr_range</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usage">usage</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeouts"></a>

```python
timeouts: NetworkConnectivityInternalRangeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference">NetworkConnectivityInternalRangeTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_cidr_range_input`<sup>Optional</sup> <a name="ip_cidr_range_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRangeInput"></a>

```python
ip_cidr_range_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `overlaps_input`<sup>Optional</sup> <a name="overlaps_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlapsInput"></a>

```python
overlaps_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peering_input`<sup>Optional</sup> <a name="peering_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peeringInput"></a>

```python
peering_input: str
```

- *Type:* str

---

##### `prefix_length_input`<sup>Optional</sup> <a name="prefix_length_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLengthInput"></a>

```python
prefix_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `target_cidr_range_input`<sup>Optional</sup> <a name="target_cidr_range_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRangeInput"></a>

```python
target_cidr_range_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkConnectivityInternalRangeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>]

---

##### `usage_input`<sup>Optional</sup> <a name="usage_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usageInput"></a>

```python
usage_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `overlaps`<sup>Required</sup> <a name="overlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlaps"></a>

```python
overlaps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peering"></a>

```python
peering: str
```

- *Type:* str

---

##### `prefix_length`<sup>Required</sup> <a name="prefix_length" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLength"></a>

```python
prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `target_cidr_range`<sup>Required</sup> <a name="target_cidr_range" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRange"></a>

```python
target_cidr_range: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usage"></a>

```python
usage: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityInternalRangeConfig <a name="NetworkConnectivityInternalRangeConfig" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_internal_range

networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network: str,
  peering: str,
  usage: str,
  description: str = None,
  id: str = None,
  ip_cidr_range: str = None,
  labels: typing.Mapping[str] = None,
  overlaps: typing.List[str] = None,
  prefix_length: typing.Union[int, float] = None,
  project: str = None,
  target_cidr_range: typing.List[str] = None,
  timeouts: NetworkConnectivityInternalRangeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.name">name</a></code> | <code>str</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.network">network</a></code> | <code>str</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.peering">peering</a></code> | <code>str</code> | The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.usage">usage</a></code> | <code>str</code> | The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#id NetworkConnectivityInternalRange#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The IP range that this internal range defines. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.overlaps">overlaps</a></code> | <code>typing.List[str]</code> | Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | An alternate to ipCidrRange. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#project NetworkConnectivityInternalRange#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.targetCidrRange">target_cidr_range</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#name NetworkConnectivityInternalRange#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.network"></a>

```python
network: str
```

- *Type:* str

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#network NetworkConnectivityInternalRange#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.peering"></a>

```python
peering: str
```

- *Type:* str

The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#peering NetworkConnectivityInternalRange#peering}

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.usage"></a>

```python
usage: str
```

- *Type:* str

The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#usage NetworkConnectivityInternalRange#usage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#description NetworkConnectivityInternalRange#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#id NetworkConnectivityInternalRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_cidr_range`<sup>Optional</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

The IP range that this internal range defines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#ip_cidr_range NetworkConnectivityInternalRange#ip_cidr_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#labels NetworkConnectivityInternalRange#labels}

---

##### `overlaps`<sup>Optional</sup> <a name="overlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.overlaps"></a>

```python
overlaps: typing.List[str]
```

- *Type:* typing.List[str]

Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#overlaps NetworkConnectivityInternalRange#overlaps}

---

##### `prefix_length`<sup>Optional</sup> <a name="prefix_length" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.prefixLength"></a>

```python
prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An alternate to ipCidrRange.

Can be set when trying to create a reservation that automatically finds a free range of the given size.
If both ipCidrRange and prefixLength are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#prefix_length NetworkConnectivityInternalRange#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#project NetworkConnectivityInternalRange#project}.

---

##### `target_cidr_range`<sup>Optional</sup> <a name="target_cidr_range" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.targetCidrRange"></a>

```python
target_cidr_range: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

Can be set to narrow down or pick a different address space while searching for a free range.
If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#target_cidr_range NetworkConnectivityInternalRange#target_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.timeouts"></a>

```python
timeouts: NetworkConnectivityInternalRangeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#timeouts NetworkConnectivityInternalRange#timeouts}

---

### NetworkConnectivityInternalRangeTimeouts <a name="NetworkConnectivityInternalRangeTimeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_internal_range

networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#create NetworkConnectivityInternalRange#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#delete NetworkConnectivityInternalRange#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#update NetworkConnectivityInternalRange#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#create NetworkConnectivityInternalRange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#delete NetworkConnectivityInternalRange#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/network_connectivity_internal_range#update NetworkConnectivityInternalRange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityInternalRangeTimeoutsOutputReference <a name="NetworkConnectivityInternalRangeTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_internal_range

networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkConnectivityInternalRangeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>]

---



