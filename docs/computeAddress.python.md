# `computeAddress` Submodule <a name="`computeAddress` Submodule" id="@cdktf/provider-google.computeAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeAddress <a name="ComputeAddress" id="@cdktf/provider-google.computeAddress.ComputeAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address google_compute_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_address

computeAddress.ComputeAddress(
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
  address: str = None,
  address_type: str = None,
  description: str = None,
  id: str = None,
  ipv6_endpoint_type: str = None,
  ip_version: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  network_tier: str = None,
  prefix_length: typing.Union[int, float] = None,
  project: str = None,
  purpose: str = None,
  region: str = None,
  subnetwork: str = None,
  timeouts: ComputeAddressTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.address">address</a></code> | <code>str</code> | The static external IP address represented by this resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.addressType">address_type</a></code> | <code>str</code> | The type of address to reserve. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#id ComputeAddress#id}. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.ipv6EndpointType">ipv6_endpoint_type</a></code> | <code>str</code> | The endpoint type of this address, which should be VM or NETLB. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.ipVersion">ip_version</a></code> | <code>str</code> | The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this address.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.network">network</a></code> | <code>str</code> | The URL of the network in which to reserve the address. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.networkTier">network_tier</a></code> | <code>str</code> | The networking tier used for configuring this address. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | The prefix length if the resource represents an IP range. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#project ComputeAddress#project}. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.purpose">purpose</a></code> | <code>str</code> | The purpose of this resource, which can be one of the following values. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region in which the created address should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>str</code> | The URL of the subnetwork in which to reserve the address. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#name ComputeAddress#name}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.address"></a>

- *Type:* str

The static external IP address represented by this resource.

The IP address must be inside the specified subnetwork,
if any. Set by the API if undefined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#address ComputeAddress#address}

---

##### `address_type`<sup>Optional</sup> <a name="address_type" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.addressType"></a>

- *Type:* str

The type of address to reserve.

Note: if you set this argument's value as 'INTERNAL' you need to leave the 'network_tier' argument unset in that resource block. Default value: "EXTERNAL" Possible values: ["INTERNAL", "EXTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#address_type ComputeAddress#address_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#description ComputeAddress#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#id ComputeAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_endpoint_type`<sup>Optional</sup> <a name="ipv6_endpoint_type" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.ipv6EndpointType"></a>

- *Type:* str

The endpoint type of this address, which should be VM or NETLB.

This is
used for deciding which type of endpoint this address can be used after
the external IPv6 address reservation. Possible values: ["VM", "NETLB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#ipv6_endpoint_type ComputeAddress#ipv6_endpoint_type}

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.ipVersion"></a>

- *Type:* str

The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#ip_version ComputeAddress#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this address.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#labels ComputeAddress#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.network"></a>

- *Type:* str

The URL of the network in which to reserve the address.

This field
can only be used with INTERNAL type with the VPC_PEERING and
IPSEC_INTERCONNECT purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#network ComputeAddress#network}

---

##### `network_tier`<sup>Optional</sup> <a name="network_tier" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.networkTier"></a>

- *Type:* str

The networking tier used for configuring this address.

If this field is not
specified, it is assumed to be PREMIUM.
This argument should not be used when configuring Internal addresses, because [network tier cannot be set for internal traffic; it's always Premium](https://cloud.google.com/network-tiers/docs/overview). Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#network_tier ComputeAddress#network_tier}

---

##### `prefix_length`<sup>Optional</sup> <a name="prefix_length" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.prefixLength"></a>

- *Type:* typing.Union[int, float]

The prefix length if the resource represents an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#prefix_length ComputeAddress#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#project ComputeAddress#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.purpose"></a>

- *Type:* str

The purpose of this resource, which can be one of the following values.

* GCE_ENDPOINT for addresses that are used by VM instances, alias IP
  ranges, load balancers, and similar resources.
* SHARED_LOADBALANCER_VIP for an address that can be used by multiple
  internal load balancers.
* VPC_PEERING for addresses that are reserved for VPC peer networks.
* IPSEC_INTERCONNECT for addresses created from a private IP range that
  are reserved for a VLAN attachment in an HA VPN over Cloud Interconnect
  configuration. These addresses are regional resources.
* PRIVATE_SERVICE_CONNECT for a private network address that is used to
  configure Private Service Connect. Only global internal addresses can use
  this purpose.

This should only be set when using an Internal address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#purpose ComputeAddress#purpose}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.region"></a>

- *Type:* str

The Region in which the created address should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#region ComputeAddress#region}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.subnetwork"></a>

- *Type:* str

The URL of the subnetwork in which to reserve the address.

If an IP
address is specified, it must be within the subnetwork's IP range.
This field can only be used with INTERNAL type with
GCE_ENDPOINT/DNS_RESOLVER purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#subnetwork ComputeAddress#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#timeouts ComputeAddress#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetAddressType">reset_address_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetIpv6EndpointType">reset_ipv6_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetIpVersion">reset_ip_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetNetworkTier">reset_network_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetPrefixLength">reset_prefix_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetPurpose">reset_purpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeAddress.ComputeAddress.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeAddress.ComputeAddress.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeAddress.ComputeAddress.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAddress.ComputeAddress.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeAddress.ComputeAddress.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeAddress.ComputeAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeAddress.ComputeAddress.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeAddress.ComputeAddress.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeAddress.ComputeAddress.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeAddress.ComputeAddress.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeAddress.ComputeAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeAddress.ComputeAddress.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeAddress.ComputeAddress.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddress.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAddress.ComputeAddress.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeAddress.ComputeAddress.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeAddress.ComputeAddress.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#create ComputeAddress#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeAddress.ComputeAddress.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#delete ComputeAddress#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeAddress.ComputeAddress.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#update ComputeAddress#update}.

---

##### `reset_address` <a name="reset_address" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_address_type` <a name="reset_address_type" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetAddressType"></a>

```python
def reset_address_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv6_endpoint_type` <a name="reset_ipv6_endpoint_type" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetIpv6EndpointType"></a>

```python
def reset_ipv6_endpoint_type() -> None
```

##### `reset_ip_version` <a name="reset_ip_version" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetIpVersion"></a>

```python
def reset_ip_version() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_tier` <a name="reset_network_tier" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetNetworkTier"></a>

```python
def reset_network_tier() -> None
```

##### `reset_prefix_length` <a name="reset_prefix_length" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetPrefixLength"></a>

```python
def reset_prefix_length() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_purpose` <a name="reset_purpose" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetPurpose"></a>

```python
def reset_purpose() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeAddress resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeAddress.ComputeAddress.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_address

computeAddress.ComputeAddress.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAddress.ComputeAddress.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeAddress.ComputeAddress.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_address

computeAddress.ComputeAddress.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAddress.ComputeAddress.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeAddress.ComputeAddress.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_address

computeAddress.ComputeAddress.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAddress.ComputeAddress.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeAddress.ComputeAddress.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_address

computeAddress.ComputeAddress.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeAddress.ComputeAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeAddress.ComputeAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeAddress to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeAddress.ComputeAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAddress.ComputeAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference">ComputeAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.addressTypeInput">address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.ipv6EndpointTypeInput">ipv6_endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.ipVersionInput">ip_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.networkTierInput">network_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.prefixLengthInput">prefix_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.purposeInput">purpose_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.addressType">address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.ipv6EndpointType">ipv6_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.networkTier">network_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.purpose">purpose</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.timeouts"></a>

```python
timeouts: ComputeAddressTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference">ComputeAddressTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `address_type_input`<sup>Optional</sup> <a name="address_type_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.addressTypeInput"></a>

```python
address_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipv6_endpoint_type_input`<sup>Optional</sup> <a name="ipv6_endpoint_type_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.ipv6EndpointTypeInput"></a>

```python
ipv6_endpoint_type_input: str
```

- *Type:* str

---

##### `ip_version_input`<sup>Optional</sup> <a name="ip_version_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.ipVersionInput"></a>

```python
ip_version_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network_tier_input`<sup>Optional</sup> <a name="network_tier_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.networkTierInput"></a>

```python
network_tier_input: str
```

- *Type:* str

---

##### `prefix_length_input`<sup>Optional</sup> <a name="prefix_length_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.prefixLengthInput"></a>

```python
prefix_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `purpose_input`<sup>Optional</sup> <a name="purpose_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.purposeInput"></a>

```python
purpose_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeAddressTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a>]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `address_type`<sup>Required</sup> <a name="address_type" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.addressType"></a>

```python
address_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipv6_endpoint_type`<sup>Required</sup> <a name="ipv6_endpoint_type" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.ipv6EndpointType"></a>

```python
ipv6_endpoint_type: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_tier`<sup>Required</sup> <a name="network_tier" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

---

##### `prefix_length`<sup>Required</sup> <a name="prefix_length" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.prefixLength"></a>

```python
prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeAddressConfig <a name="ComputeAddressConfig" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_address

computeAddress.ComputeAddressConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  address: str = None,
  address_type: str = None,
  description: str = None,
  id: str = None,
  ipv6_endpoint_type: str = None,
  ip_version: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  network_tier: str = None,
  prefix_length: typing.Union[int, float] = None,
  project: str = None,
  purpose: str = None,
  region: str = None,
  subnetwork: str = None,
  timeouts: ComputeAddressTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.address">address</a></code> | <code>str</code> | The static external IP address represented by this resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.addressType">address_type</a></code> | <code>str</code> | The type of address to reserve. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#id ComputeAddress#id}. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.ipv6EndpointType">ipv6_endpoint_type</a></code> | <code>str</code> | The endpoint type of this address, which should be VM or NETLB. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.ipVersion">ip_version</a></code> | <code>str</code> | The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this address.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.network">network</a></code> | <code>str</code> | The URL of the network in which to reserve the address. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.networkTier">network_tier</a></code> | <code>str</code> | The networking tier used for configuring this address. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | The prefix length if the resource represents an IP range. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#project ComputeAddress#project}. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.purpose">purpose</a></code> | <code>str</code> | The purpose of this resource, which can be one of the following values. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.region">region</a></code> | <code>str</code> | The Region in which the created address should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | The URL of the subnetwork in which to reserve the address. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#name ComputeAddress#name}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.address"></a>

```python
address: str
```

- *Type:* str

The static external IP address represented by this resource.

The IP address must be inside the specified subnetwork,
if any. Set by the API if undefined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#address ComputeAddress#address}

---

##### `address_type`<sup>Optional</sup> <a name="address_type" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.addressType"></a>

```python
address_type: str
```

- *Type:* str

The type of address to reserve.

Note: if you set this argument's value as 'INTERNAL' you need to leave the 'network_tier' argument unset in that resource block. Default value: "EXTERNAL" Possible values: ["INTERNAL", "EXTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#address_type ComputeAddress#address_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#description ComputeAddress#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#id ComputeAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_endpoint_type`<sup>Optional</sup> <a name="ipv6_endpoint_type" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.ipv6EndpointType"></a>

```python
ipv6_endpoint_type: str
```

- *Type:* str

The endpoint type of this address, which should be VM or NETLB.

This is
used for deciding which type of endpoint this address can be used after
the external IPv6 address reservation. Possible values: ["VM", "NETLB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#ipv6_endpoint_type ComputeAddress#ipv6_endpoint_type}

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#ip_version ComputeAddress#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this address.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#labels ComputeAddress#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The URL of the network in which to reserve the address.

This field
can only be used with INTERNAL type with the VPC_PEERING and
IPSEC_INTERCONNECT purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#network ComputeAddress#network}

---

##### `network_tier`<sup>Optional</sup> <a name="network_tier" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.networkTier"></a>

```python
network_tier: str
```

- *Type:* str

The networking tier used for configuring this address.

If this field is not
specified, it is assumed to be PREMIUM.
This argument should not be used when configuring Internal addresses, because [network tier cannot be set for internal traffic; it's always Premium](https://cloud.google.com/network-tiers/docs/overview). Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#network_tier ComputeAddress#network_tier}

---

##### `prefix_length`<sup>Optional</sup> <a name="prefix_length" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.prefixLength"></a>

```python
prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The prefix length if the resource represents an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#prefix_length ComputeAddress#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#project ComputeAddress#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

The purpose of this resource, which can be one of the following values.

* GCE_ENDPOINT for addresses that are used by VM instances, alias IP
  ranges, load balancers, and similar resources.
* SHARED_LOADBALANCER_VIP for an address that can be used by multiple
  internal load balancers.
* VPC_PEERING for addresses that are reserved for VPC peer networks.
* IPSEC_INTERCONNECT for addresses created from a private IP range that
  are reserved for a VLAN attachment in an HA VPN over Cloud Interconnect
  configuration. These addresses are regional resources.
* PRIVATE_SERVICE_CONNECT for a private network address that is used to
  configure Private Service Connect. Only global internal addresses can use
  this purpose.

This should only be set when using an Internal address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#purpose ComputeAddress#purpose}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region in which the created address should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#region ComputeAddress#region}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The URL of the subnetwork in which to reserve the address.

If an IP
address is specified, it must be within the subnetwork's IP range.
This field can only be used with INTERNAL type with
GCE_ENDPOINT/DNS_RESOLVER purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#subnetwork ComputeAddress#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.timeouts"></a>

```python
timeouts: ComputeAddressTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#timeouts ComputeAddress#timeouts}

---

### ComputeAddressTimeouts <a name="ComputeAddressTimeouts" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_address

computeAddress.ComputeAddressTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#create ComputeAddress#create}. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#delete ComputeAddress#delete}. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#update ComputeAddress#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#create ComputeAddress#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#delete ComputeAddress#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_address#update ComputeAddress#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeAddressTimeoutsOutputReference <a name="ComputeAddressTimeoutsOutputReference" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_address

computeAddress.ComputeAddressTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeAddressTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a>]

---



