# `google_network_connectivity_spoke`

Refer to the Terraform Registory for docs: [`google_network_connectivity_spoke`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke).

# `networkConnectivitySpoke` Submodule <a name="`networkConnectivitySpoke` Submodule" id="@cdktf/provider-google.networkConnectivitySpoke"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivitySpoke <a name="NetworkConnectivitySpoke" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke google_network_connectivity_spoke}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpoke(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hub: str,
  location: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  linked_interconnect_attachments: NetworkConnectivitySpokeLinkedInterconnectAttachments = None,
  linked_router_appliance_instances: NetworkConnectivitySpokeLinkedRouterApplianceInstances = None,
  linked_vpc_network: NetworkConnectivitySpokeLinkedVpcNetwork = None,
  linked_vpn_tunnels: NetworkConnectivitySpokeLinkedVpnTunnels = None,
  project: str = None,
  timeouts: NetworkConnectivitySpokeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.hub">hub</a></code> | <code>str</code> | Immutable. The URI of the hub that this spoke is attached to. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.name">name</a></code> | <code>str</code> | Immutable. The name of the spoke. Spoke names must be unique. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the spoke. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#id NetworkConnectivitySpoke#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedInterconnectAttachments">linked_interconnect_attachments</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | linked_interconnect_attachments block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedRouterApplianceInstances">linked_router_appliance_instances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | linked_router_appliance_instances block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedVpcNetwork">linked_vpc_network</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a></code> | linked_vpc_network block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedVpnTunnels">linked_vpn_tunnels</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | linked_vpn_tunnels block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.hub"></a>

- *Type:* str

Immutable. The URI of the hub that this spoke is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#hub NetworkConnectivitySpoke#hub}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#location NetworkConnectivitySpoke#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.name"></a>

- *Type:* str

Immutable. The name of the spoke. Spoke names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#name NetworkConnectivitySpoke#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#description NetworkConnectivitySpoke#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#id NetworkConnectivitySpoke#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#labels NetworkConnectivitySpoke#labels}

---

##### `linked_interconnect_attachments`<sup>Optional</sup> <a name="linked_interconnect_attachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedInterconnectAttachments"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

linked_interconnect_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#linked_interconnect_attachments NetworkConnectivitySpoke#linked_interconnect_attachments}

---

##### `linked_router_appliance_instances`<sup>Optional</sup> <a name="linked_router_appliance_instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedRouterApplianceInstances"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

linked_router_appliance_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#linked_router_appliance_instances NetworkConnectivitySpoke#linked_router_appliance_instances}

---

##### `linked_vpc_network`<sup>Optional</sup> <a name="linked_vpc_network" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedVpcNetwork"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a>

linked_vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#linked_vpc_network NetworkConnectivitySpoke#linked_vpc_network}

---

##### `linked_vpn_tunnels`<sup>Optional</sup> <a name="linked_vpn_tunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.linkedVpnTunnels"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

linked_vpn_tunnels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#linked_vpn_tunnels NetworkConnectivitySpoke#linked_vpn_tunnels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#project NetworkConnectivitySpoke#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#timeouts NetworkConnectivitySpoke#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedInterconnectAttachments">put_linked_interconnect_attachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedRouterApplianceInstances">put_linked_router_appliance_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpcNetwork">put_linked_vpc_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpnTunnels">put_linked_vpn_tunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedInterconnectAttachments">reset_linked_interconnect_attachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedRouterApplianceInstances">reset_linked_router_appliance_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpcNetwork">reset_linked_vpc_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpnTunnels">reset_linked_vpn_tunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_linked_interconnect_attachments` <a name="put_linked_interconnect_attachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedInterconnectAttachments"></a>

```python
def put_linked_interconnect_attachments(
  site_to_site_data_transfer: typing.Union[bool, IResolvable],
  uris: typing.List[str]
) -> None
```

###### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedInterconnectAttachments.parameter.siteToSiteDataTransfer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

###### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedInterconnectAttachments.parameter.uris"></a>

- *Type:* typing.List[str]

The URIs of linked interconnect attachment resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}

---

##### `put_linked_router_appliance_instances` <a name="put_linked_router_appliance_instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedRouterApplianceInstances"></a>

```python
def put_linked_router_appliance_instances(
  instances: typing.Union[IResolvable, typing.List[NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances]],
  site_to_site_data_transfer: typing.Union[bool, IResolvable]
) -> None
```

###### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedRouterApplianceInstances.parameter.instances"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#instances NetworkConnectivitySpoke#instances}

---

###### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedRouterApplianceInstances.parameter.siteToSiteDataTransfer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `put_linked_vpc_network` <a name="put_linked_vpc_network" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpcNetwork"></a>

```python
def put_linked_vpc_network(
  uri: str,
  exclude_export_ranges: typing.List[str] = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpcNetwork.parameter.uri"></a>

- *Type:* str

The URI of the VPC network resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#uri NetworkConnectivitySpoke#uri}

---

###### `exclude_export_ranges`<sup>Optional</sup> <a name="exclude_export_ranges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpcNetwork.parameter.excludeExportRanges"></a>

- *Type:* typing.List[str]

IP ranges encompassing the subnets to be excluded from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#exclude_export_ranges NetworkConnectivitySpoke#exclude_export_ranges}

---

##### `put_linked_vpn_tunnels` <a name="put_linked_vpn_tunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpnTunnels"></a>

```python
def put_linked_vpn_tunnels(
  site_to_site_data_transfer: typing.Union[bool, IResolvable],
  uris: typing.List[str]
) -> None
```

###### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpnTunnels.parameter.siteToSiteDataTransfer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

###### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putLinkedVpnTunnels.parameter.uris"></a>

- *Type:* typing.List[str]

The URIs of linked VPN tunnel resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#create NetworkConnectivitySpoke#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#delete NetworkConnectivitySpoke#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#update NetworkConnectivitySpoke#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_linked_interconnect_attachments` <a name="reset_linked_interconnect_attachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedInterconnectAttachments"></a>

```python
def reset_linked_interconnect_attachments() -> None
```

##### `reset_linked_router_appliance_instances` <a name="reset_linked_router_appliance_instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedRouterApplianceInstances"></a>

```python
def reset_linked_router_appliance_instances() -> None
```

##### `reset_linked_vpc_network` <a name="reset_linked_vpc_network" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpcNetwork"></a>

```python
def reset_linked_vpc_network() -> None
```

##### `reset_linked_vpn_tunnels` <a name="reset_linked_vpn_tunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetLinkedVpnTunnels"></a>

```python
def reset_linked_vpn_tunnels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpoke.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpoke.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpoke.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachments">linked_interconnect_attachments</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference">NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstances">linked_router_appliance_instances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference">NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpcNetwork">linked_vpc_network</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference">NetworkConnectivitySpokeLinkedVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnels">linked_vpn_tunnels</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference">NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference">NetworkConnectivitySpokeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hubInput">hub_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachmentsInput">linked_interconnect_attachments_input</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstancesInput">linked_router_appliance_instances_input</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpcNetworkInput">linked_vpc_network_input</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnelsInput">linked_vpn_tunnels_input</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hub">hub</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `linked_interconnect_attachments`<sup>Required</sup> <a name="linked_interconnect_attachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachments"></a>

```python
linked_interconnect_attachments: NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference">NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference</a>

---

##### `linked_router_appliance_instances`<sup>Required</sup> <a name="linked_router_appliance_instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstances"></a>

```python
linked_router_appliance_instances: NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference">NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference</a>

---

##### `linked_vpc_network`<sup>Required</sup> <a name="linked_vpc_network" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpcNetwork"></a>

```python
linked_vpc_network: NetworkConnectivitySpokeLinkedVpcNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference">NetworkConnectivitySpokeLinkedVpcNetworkOutputReference</a>

---

##### `linked_vpn_tunnels`<sup>Required</sup> <a name="linked_vpn_tunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnels"></a>

```python
linked_vpn_tunnels: NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference">NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeouts"></a>

```python
timeouts: NetworkConnectivitySpokeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference">NetworkConnectivitySpokeTimeoutsOutputReference</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hub_input`<sup>Optional</sup> <a name="hub_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hubInput"></a>

```python
hub_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `linked_interconnect_attachments_input`<sup>Optional</sup> <a name="linked_interconnect_attachments_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedInterconnectAttachmentsInput"></a>

```python
linked_interconnect_attachments_input: NetworkConnectivitySpokeLinkedInterconnectAttachments
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---

##### `linked_router_appliance_instances_input`<sup>Optional</sup> <a name="linked_router_appliance_instances_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedRouterApplianceInstancesInput"></a>

```python
linked_router_appliance_instances_input: NetworkConnectivitySpokeLinkedRouterApplianceInstances
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---

##### `linked_vpc_network_input`<sup>Optional</sup> <a name="linked_vpc_network_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpcNetworkInput"></a>

```python
linked_vpc_network_input: NetworkConnectivitySpokeLinkedVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a>

---

##### `linked_vpn_tunnels_input`<sup>Optional</sup> <a name="linked_vpn_tunnels_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.linkedVpnTunnelsInput"></a>

```python
linked_vpn_tunnels_input: NetworkConnectivitySpokeLinkedVpnTunnels
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkConnectivitySpokeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.hub"></a>

```python
hub: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpoke.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivitySpokeConfig <a name="NetworkConnectivitySpokeConfig" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hub: str,
  location: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  linked_interconnect_attachments: NetworkConnectivitySpokeLinkedInterconnectAttachments = None,
  linked_router_appliance_instances: NetworkConnectivitySpokeLinkedRouterApplianceInstances = None,
  linked_vpc_network: NetworkConnectivitySpokeLinkedVpcNetwork = None,
  linked_vpn_tunnels: NetworkConnectivitySpokeLinkedVpnTunnels = None,
  project: str = None,
  timeouts: NetworkConnectivitySpokeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.hub">hub</a></code> | <code>str</code> | Immutable. The URI of the hub that this spoke is attached to. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.name">name</a></code> | <code>str</code> | Immutable. The name of the spoke. Spoke names must be unique. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.description">description</a></code> | <code>str</code> | An optional description of the spoke. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#id NetworkConnectivitySpoke#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedInterconnectAttachments">linked_interconnect_attachments</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | linked_interconnect_attachments block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedRouterApplianceInstances">linked_router_appliance_instances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | linked_router_appliance_instances block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpcNetwork">linked_vpc_network</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a></code> | linked_vpc_network block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpnTunnels">linked_vpn_tunnels</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | linked_vpn_tunnels block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hub`<sup>Required</sup> <a name="hub" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.hub"></a>

```python
hub: str
```

- *Type:* str

Immutable. The URI of the hub that this spoke is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#hub NetworkConnectivitySpoke#hub}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#location NetworkConnectivitySpoke#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Immutable. The name of the spoke. Spoke names must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#name NetworkConnectivitySpoke#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the spoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#description NetworkConnectivitySpoke#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#id NetworkConnectivitySpoke#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#labels NetworkConnectivitySpoke#labels}

---

##### `linked_interconnect_attachments`<sup>Optional</sup> <a name="linked_interconnect_attachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedInterconnectAttachments"></a>

```python
linked_interconnect_attachments: NetworkConnectivitySpokeLinkedInterconnectAttachments
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

linked_interconnect_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#linked_interconnect_attachments NetworkConnectivitySpoke#linked_interconnect_attachments}

---

##### `linked_router_appliance_instances`<sup>Optional</sup> <a name="linked_router_appliance_instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedRouterApplianceInstances"></a>

```python
linked_router_appliance_instances: NetworkConnectivitySpokeLinkedRouterApplianceInstances
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

linked_router_appliance_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#linked_router_appliance_instances NetworkConnectivitySpoke#linked_router_appliance_instances}

---

##### `linked_vpc_network`<sup>Optional</sup> <a name="linked_vpc_network" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpcNetwork"></a>

```python
linked_vpc_network: NetworkConnectivitySpokeLinkedVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a>

linked_vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#linked_vpc_network NetworkConnectivitySpoke#linked_vpc_network}

---

##### `linked_vpn_tunnels`<sup>Optional</sup> <a name="linked_vpn_tunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.linkedVpnTunnels"></a>

```python
linked_vpn_tunnels: NetworkConnectivitySpokeLinkedVpnTunnels
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

linked_vpn_tunnels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#linked_vpn_tunnels NetworkConnectivitySpoke#linked_vpn_tunnels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#project NetworkConnectivitySpoke#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeConfig.property.timeouts"></a>

```python
timeouts: NetworkConnectivitySpokeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#timeouts NetworkConnectivitySpoke#timeouts}

---

### NetworkConnectivitySpokeLinkedInterconnectAttachments <a name="NetworkConnectivitySpokeLinkedInterconnectAttachments" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments(
  site_to_site_data_transfer: typing.Union[bool, IResolvable],
  uris: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.siteToSiteDataTransfer">site_to_site_data_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.uris">uris</a></code> | <code>typing.List[str]</code> | The URIs of linked interconnect attachment resources. |

---

##### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.siteToSiteDataTransfer"></a>

```python
site_to_site_data_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

The URIs of linked interconnect attachment resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}

---

### NetworkConnectivitySpokeLinkedRouterApplianceInstances <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances(
  instances: typing.Union[IResolvable, typing.List[NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances]],
  site_to_site_data_transfer: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.instances">instances</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]]</code> | instances block. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.siteToSiteDataTransfer">site_to_site_data_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.instances"></a>

```python
instances: typing.Union[IResolvable, typing.List[NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#instances NetworkConnectivitySpoke#instances}

---

##### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances.property.siteToSiteDataTransfer"></a>

```python
site_to_site_data_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

### NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances(
  ip_address: str = None,
  virtual_machine: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.ipAddress">ip_address</a></code> | <code>str</code> | The IP address on the VM to use for peering. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.virtualMachine">virtual_machine</a></code> | <code>str</code> | The URI of the virtual machine resource. |

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The IP address on the VM to use for peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#ip_address NetworkConnectivitySpoke#ip_address}

---

##### `virtual_machine`<sup>Optional</sup> <a name="virtual_machine" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances.property.virtualMachine"></a>

```python
virtual_machine: str
```

- *Type:* str

The URI of the virtual machine resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#virtual_machine NetworkConnectivitySpoke#virtual_machine}

---

### NetworkConnectivitySpokeLinkedVpcNetwork <a name="NetworkConnectivitySpokeLinkedVpcNetwork" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork(
  uri: str,
  exclude_export_ranges: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.uri">uri</a></code> | <code>str</code> | The URI of the VPC network resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.excludeExportRanges">exclude_export_ranges</a></code> | <code>typing.List[str]</code> | IP ranges encompassing the subnets to be excluded from peering. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI of the VPC network resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#uri NetworkConnectivitySpoke#uri}

---

##### `exclude_export_ranges`<sup>Optional</sup> <a name="exclude_export_ranges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork.property.excludeExportRanges"></a>

```python
exclude_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

IP ranges encompassing the subnets to be excluded from peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#exclude_export_ranges NetworkConnectivitySpoke#exclude_export_ranges}

---

### NetworkConnectivitySpokeLinkedVpnTunnels <a name="NetworkConnectivitySpokeLinkedVpnTunnels" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels(
  site_to_site_data_transfer: typing.Union[bool, IResolvable],
  uris: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.siteToSiteDataTransfer">site_to_site_data_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A value that controls whether site-to-site data transfer is enabled for these resources. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.uris">uris</a></code> | <code>typing.List[str]</code> | The URIs of linked VPN tunnel resources. |

---

##### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.siteToSiteDataTransfer"></a>

```python
site_to_site_data_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A value that controls whether site-to-site data transfer is enabled for these resources.

Note that data transfer is available only in supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#site_to_site_data_transfer NetworkConnectivitySpoke#site_to_site_data_transfer}

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

The URIs of linked VPN tunnel resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#uris NetworkConnectivitySpoke#uris}

---

### NetworkConnectivitySpokeTimeouts <a name="NetworkConnectivitySpokeTimeouts" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#create NetworkConnectivitySpoke#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#delete NetworkConnectivitySpoke#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#update NetworkConnectivitySpoke#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#create NetworkConnectivitySpoke#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#delete NetworkConnectivitySpoke#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/network_connectivity_spoke#update NetworkConnectivitySpoke#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference <a name="NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransferInput">site_to_site_data_transfer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.urisInput">uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransfer">site_to_site_data_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.uris">uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `site_to_site_data_transfer_input`<sup>Optional</sup> <a name="site_to_site_data_transfer_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransferInput"></a>

```python
site_to_site_data_transfer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `uris_input`<sup>Optional</sup> <a name="uris_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.urisInput"></a>

```python
uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.siteToSiteDataTransfer"></a>

```python
site_to_site_data_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachmentsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkConnectivitySpokeLinkedInterconnectAttachments
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedInterconnectAttachments">NetworkConnectivitySpokeLinkedInterconnectAttachments</a>

---


### NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]]

---


### NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetVirtualMachine">reset_virtual_machine</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_virtual_machine` <a name="reset_virtual_machine" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.resetVirtualMachine"></a>

```python
def reset_virtual_machine() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachineInput">virtual_machine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachine">virtual_machine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `virtual_machine_input`<sup>Optional</sup> <a name="virtual_machine_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachineInput"></a>

```python
virtual_machine_input: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `virtual_machine`<sup>Required</sup> <a name="virtual_machine" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.virtualMachine"></a>

```python
virtual_machine: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]

---


### NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference <a name="NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances">put_instances</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_instances` <a name="put_instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances"></a>

```python
def put_instances(
  value: typing.Union[IResolvable, typing.List[NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.putInstances.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instancesInput">instances_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransferInput">site_to_site_data_transfer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransfer">site_to_site_data_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instances"></a>

```python
instances: NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstancesList</a>

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.instancesInput"></a>

```python
instances_input: typing.Union[IResolvable, typing.List[NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstancesInstances</a>]]

---

##### `site_to_site_data_transfer_input`<sup>Optional</sup> <a name="site_to_site_data_transfer_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransferInput"></a>

```python
site_to_site_data_transfer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.siteToSiteDataTransfer"></a>

```python
site_to_site_data_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstancesOutputReference.property.internalValue"></a>

```python
internal_value: NetworkConnectivitySpokeLinkedRouterApplianceInstances
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedRouterApplianceInstances">NetworkConnectivitySpokeLinkedRouterApplianceInstances</a>

---


### NetworkConnectivitySpokeLinkedVpcNetworkOutputReference <a name="NetworkConnectivitySpokeLinkedVpcNetworkOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resetExcludeExportRanges">reset_exclude_export_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_export_ranges` <a name="reset_exclude_export_ranges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.resetExcludeExportRanges"></a>

```python
def reset_exclude_export_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRangesInput">exclude_export_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRanges">exclude_export_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_export_ranges_input`<sup>Optional</sup> <a name="exclude_export_ranges_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRangesInput"></a>

```python
exclude_export_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `exclude_export_ranges`<sup>Required</sup> <a name="exclude_export_ranges" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.excludeExportRanges"></a>

```python
exclude_export_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetworkOutputReference.property.internalValue"></a>

```python
internal_value: NetworkConnectivitySpokeLinkedVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpcNetwork">NetworkConnectivitySpokeLinkedVpcNetwork</a>

---


### NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference <a name="NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransferInput">site_to_site_data_transfer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.urisInput">uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransfer">site_to_site_data_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.uris">uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `site_to_site_data_transfer_input`<sup>Optional</sup> <a name="site_to_site_data_transfer_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransferInput"></a>

```python
site_to_site_data_transfer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `uris_input`<sup>Optional</sup> <a name="uris_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.urisInput"></a>

```python
uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_to_site_data_transfer`<sup>Required</sup> <a name="site_to_site_data_transfer" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.siteToSiteDataTransfer"></a>

```python
site_to_site_data_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.uris"></a>

```python
uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnelsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkConnectivitySpokeLinkedVpnTunnels
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeLinkedVpnTunnels">NetworkConnectivitySpokeLinkedVpnTunnels</a>

---


### NetworkConnectivitySpokeTimeoutsOutputReference <a name="NetworkConnectivitySpokeTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_connectivity_spoke

networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkConnectivitySpokeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkConnectivitySpoke.NetworkConnectivitySpokeTimeouts">NetworkConnectivitySpokeTimeouts</a>]

---



