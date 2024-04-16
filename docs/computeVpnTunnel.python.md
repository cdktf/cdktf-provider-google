# `computeVpnTunnel` Submodule <a name="`computeVpnTunnel` Submodule" id="@cdktf/provider-google.computeVpnTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeVpnTunnel <a name="ComputeVpnTunnel" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel google_compute_vpn_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_vpn_tunnel

computeVpnTunnel.ComputeVpnTunnel(
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
  shared_secret: str,
  description: str = None,
  id: str = None,
  ike_version: typing.Union[int, float] = None,
  labels: typing.Mapping[str] = None,
  local_traffic_selector: typing.List[str] = None,
  peer_external_gateway: str = None,
  peer_external_gateway_interface: typing.Union[int, float] = None,
  peer_gcp_gateway: str = None,
  peer_ip: str = None,
  project: str = None,
  region: str = None,
  remote_traffic_selector: typing.List[str] = None,
  router: str = None,
  target_vpn_gateway: str = None,
  timeouts: ComputeVpnTunnelTimeouts = None,
  vpn_gateway: str = None,
  vpn_gateway_interface: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.sharedSecret">shared_secret</a></code> | <code>str</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.ikeVersion">ike_version</a></code> | <code>typing.Union[int, float]</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this VpnTunnel. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.localTrafficSelector">local_traffic_selector</a></code> | <code>typing.List[str]</code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerExternalGateway">peer_external_gateway</a></code> | <code>str</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerExternalGatewayInterface">peer_external_gateway_interface</a></code> | <code>typing.Union[int, float]</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerGcpGateway">peer_gcp_gateway</a></code> | <code>str</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerIp">peer_ip</a></code> | <code>str</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.region">region</a></code> | <code>str</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.remoteTrafficSelector">remote_traffic_selector</a></code> | <code>typing.List[str]</code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.router">router</a></code> | <code>str</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.targetVpnGateway">target_vpn_gateway</a></code> | <code>str</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.vpnGateway">vpn_gateway</a></code> | <code>str</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.vpnGatewayInterface">vpn_gateway_interface</a></code> | <code>typing.Union[int, float]</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#name ComputeVpnTunnel#name}

---

##### `shared_secret`<sup>Required</sup> <a name="shared_secret" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.sharedSecret"></a>

- *Type:* str

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#shared_secret ComputeVpnTunnel#shared_secret}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#description ComputeVpnTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ike_version`<sup>Optional</sup> <a name="ike_version" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.ikeVersion"></a>

- *Type:* typing.Union[int, float]

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#ike_version ComputeVpnTunnel#ike_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this VpnTunnel.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#labels ComputeVpnTunnel#labels}

---

##### `local_traffic_selector`<sup>Optional</sup> <a name="local_traffic_selector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.localTrafficSelector"></a>

- *Type:* typing.List[str]

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#local_traffic_selector ComputeVpnTunnel#local_traffic_selector}

---

##### `peer_external_gateway`<sup>Optional</sup> <a name="peer_external_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerExternalGateway"></a>

- *Type:* str

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#peer_external_gateway ComputeVpnTunnel#peer_external_gateway}

---

##### `peer_external_gateway_interface`<sup>Optional</sup> <a name="peer_external_gateway_interface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerExternalGatewayInterface"></a>

- *Type:* typing.Union[int, float]

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#peer_external_gateway_interface ComputeVpnTunnel#peer_external_gateway_interface}

---

##### `peer_gcp_gateway`<sup>Optional</sup> <a name="peer_gcp_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerGcpGateway"></a>

- *Type:* str

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#peer_gcp_gateway ComputeVpnTunnel#peer_gcp_gateway}

---

##### `peer_ip`<sup>Optional</sup> <a name="peer_ip" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.peerIp"></a>

- *Type:* str

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#peer_ip ComputeVpnTunnel#peer_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.region"></a>

- *Type:* str

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#region ComputeVpnTunnel#region}

---

##### `remote_traffic_selector`<sup>Optional</sup> <a name="remote_traffic_selector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.remoteTrafficSelector"></a>

- *Type:* typing.List[str]

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#remote_traffic_selector ComputeVpnTunnel#remote_traffic_selector}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.router"></a>

- *Type:* str

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#router ComputeVpnTunnel#router}

---

##### `target_vpn_gateway`<sup>Optional</sup> <a name="target_vpn_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.targetVpnGateway"></a>

- *Type:* str

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#target_vpn_gateway ComputeVpnTunnel#target_vpn_gateway}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#timeouts ComputeVpnTunnel#timeouts}

---

##### `vpn_gateway`<sup>Optional</sup> <a name="vpn_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.vpnGateway"></a>

- *Type:* str

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#vpn_gateway ComputeVpnTunnel#vpn_gateway}

---

##### `vpn_gateway_interface`<sup>Optional</sup> <a name="vpn_gateway_interface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.Initializer.parameter.vpnGatewayInterface"></a>

- *Type:* typing.Union[int, float]

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#vpn_gateway_interface ComputeVpnTunnel#vpn_gateway_interface}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetIkeVersion">reset_ike_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLocalTrafficSelector">reset_local_traffic_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGateway">reset_peer_external_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGatewayInterface">reset_peer_external_gateway_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerGcpGateway">reset_peer_gcp_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerIp">reset_peer_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRemoteTrafficSelector">reset_remote_traffic_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRouter">reset_router</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTargetVpnGateway">reset_target_vpn_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGateway">reset_vpn_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGatewayInterface">reset_vpn_gateway_interface</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#update ComputeVpnTunnel#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ike_version` <a name="reset_ike_version" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetIkeVersion"></a>

```python
def reset_ike_version() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_local_traffic_selector` <a name="reset_local_traffic_selector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetLocalTrafficSelector"></a>

```python
def reset_local_traffic_selector() -> None
```

##### `reset_peer_external_gateway` <a name="reset_peer_external_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGateway"></a>

```python
def reset_peer_external_gateway() -> None
```

##### `reset_peer_external_gateway_interface` <a name="reset_peer_external_gateway_interface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerExternalGatewayInterface"></a>

```python
def reset_peer_external_gateway_interface() -> None
```

##### `reset_peer_gcp_gateway` <a name="reset_peer_gcp_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerGcpGateway"></a>

```python
def reset_peer_gcp_gateway() -> None
```

##### `reset_peer_ip` <a name="reset_peer_ip" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetPeerIp"></a>

```python
def reset_peer_ip() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_remote_traffic_selector` <a name="reset_remote_traffic_selector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRemoteTrafficSelector"></a>

```python
def reset_remote_traffic_selector() -> None
```

##### `reset_router` <a name="reset_router" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetRouter"></a>

```python
def reset_router() -> None
```

##### `reset_target_vpn_gateway` <a name="reset_target_vpn_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTargetVpnGateway"></a>

```python
def reset_target_vpn_gateway() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpn_gateway` <a name="reset_vpn_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGateway"></a>

```python
def reset_vpn_gateway() -> None
```

##### `reset_vpn_gateway_interface` <a name="reset_vpn_gateway_interface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.resetVpnGatewayInterface"></a>

```python
def reset_vpn_gateway_interface() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeVpnTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_vpn_tunnel

computeVpnTunnel.ComputeVpnTunnel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_vpn_tunnel

computeVpnTunnel.ComputeVpnTunnel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_vpn_tunnel

computeVpnTunnel.ComputeVpnTunnel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_vpn_tunnel

computeVpnTunnel.ComputeVpnTunnel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeVpnTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeVpnTunnel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeVpnTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeVpnTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus">detailed_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash">shared_secret_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput">ike_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput">local_traffic_selector_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput">peer_external_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput">peer_external_gateway_interface_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput">peer_gcp_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput">peer_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput">remote_traffic_selector_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput">router_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput">shared_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput">target_vpn_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput">vpn_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput">vpn_gateway_interface_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion">ike_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector">local_traffic_selector</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway">peer_external_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface">peer_external_gateway_interface</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway">peer_gcp_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp">peer_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector">remote_traffic_selector</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router">router</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret">shared_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway">target_vpn_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway">vpn_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface">vpn_gateway_interface</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `detailed_status`<sup>Required</sup> <a name="detailed_status" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.detailedStatus"></a>

```python
detailed_status: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `shared_secret_hash`<sup>Required</sup> <a name="shared_secret_hash" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretHash"></a>

```python
shared_secret_hash: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeouts"></a>

```python
timeouts: ComputeVpnTunnelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference">ComputeVpnTunnelTimeoutsOutputReference</a>

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ike_version_input`<sup>Optional</sup> <a name="ike_version_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersionInput"></a>

```python
ike_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `local_traffic_selector_input`<sup>Optional</sup> <a name="local_traffic_selector_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelectorInput"></a>

```python
local_traffic_selector_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peer_external_gateway_input`<sup>Optional</sup> <a name="peer_external_gateway_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInput"></a>

```python
peer_external_gateway_input: str
```

- *Type:* str

---

##### `peer_external_gateway_interface_input`<sup>Optional</sup> <a name="peer_external_gateway_interface_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterfaceInput"></a>

```python
peer_external_gateway_interface_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_gcp_gateway_input`<sup>Optional</sup> <a name="peer_gcp_gateway_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGatewayInput"></a>

```python
peer_gcp_gateway_input: str
```

- *Type:* str

---

##### `peer_ip_input`<sup>Optional</sup> <a name="peer_ip_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIpInput"></a>

```python
peer_ip_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `remote_traffic_selector_input`<sup>Optional</sup> <a name="remote_traffic_selector_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelectorInput"></a>

```python
remote_traffic_selector_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `router_input`<sup>Optional</sup> <a name="router_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.routerInput"></a>

```python
router_input: str
```

- *Type:* str

---

##### `shared_secret_input`<sup>Optional</sup> <a name="shared_secret_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecretInput"></a>

```python
shared_secret_input: str
```

- *Type:* str

---

##### `target_vpn_gateway_input`<sup>Optional</sup> <a name="target_vpn_gateway_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGatewayInput"></a>

```python
target_vpn_gateway_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeVpnTunnelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>]

---

##### `vpn_gateway_input`<sup>Optional</sup> <a name="vpn_gateway_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInput"></a>

```python
vpn_gateway_input: str
```

- *Type:* str

---

##### `vpn_gateway_interface_input`<sup>Optional</sup> <a name="vpn_gateway_interface_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterfaceInput"></a>

```python
vpn_gateway_interface_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ike_version`<sup>Required</sup> <a name="ike_version" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.ikeVersion"></a>

```python
ike_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `local_traffic_selector`<sup>Required</sup> <a name="local_traffic_selector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.localTrafficSelector"></a>

```python
local_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `peer_external_gateway`<sup>Required</sup> <a name="peer_external_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGateway"></a>

```python
peer_external_gateway: str
```

- *Type:* str

---

##### `peer_external_gateway_interface`<sup>Required</sup> <a name="peer_external_gateway_interface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerExternalGatewayInterface"></a>

```python
peer_external_gateway_interface: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_gcp_gateway`<sup>Required</sup> <a name="peer_gcp_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerGcpGateway"></a>

```python
peer_gcp_gateway: str
```

- *Type:* str

---

##### `peer_ip`<sup>Required</sup> <a name="peer_ip" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.peerIp"></a>

```python
peer_ip: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `remote_traffic_selector`<sup>Required</sup> <a name="remote_traffic_selector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.remoteTrafficSelector"></a>

```python
remote_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.router"></a>

```python
router: str
```

- *Type:* str

---

##### `shared_secret`<sup>Required</sup> <a name="shared_secret" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.sharedSecret"></a>

```python
shared_secret: str
```

- *Type:* str

---

##### `target_vpn_gateway`<sup>Required</sup> <a name="target_vpn_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.targetVpnGateway"></a>

```python
target_vpn_gateway: str
```

- *Type:* str

---

##### `vpn_gateway`<sup>Required</sup> <a name="vpn_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGateway"></a>

```python
vpn_gateway: str
```

- *Type:* str

---

##### `vpn_gateway_interface`<sup>Required</sup> <a name="vpn_gateway_interface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.vpnGatewayInterface"></a>

```python
vpn_gateway_interface: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeVpnTunnelConfig <a name="ComputeVpnTunnelConfig" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_vpn_tunnel

computeVpnTunnel.ComputeVpnTunnelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  shared_secret: str,
  description: str = None,
  id: str = None,
  ike_version: typing.Union[int, float] = None,
  labels: typing.Mapping[str] = None,
  local_traffic_selector: typing.List[str] = None,
  peer_external_gateway: str = None,
  peer_external_gateway_interface: typing.Union[int, float] = None,
  peer_gcp_gateway: str = None,
  peer_ip: str = None,
  project: str = None,
  region: str = None,
  remote_traffic_selector: typing.List[str] = None,
  router: str = None,
  target_vpn_gateway: str = None,
  timeouts: ComputeVpnTunnelTimeouts = None,
  vpn_gateway: str = None,
  vpn_gateway_interface: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret">shared_secret</a></code> | <code>str</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion">ike_version</a></code> | <code>typing.Union[int, float]</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this VpnTunnel. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector">local_traffic_selector</a></code> | <code>typing.List[str]</code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway">peer_external_gateway</a></code> | <code>str</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface">peer_external_gateway_interface</a></code> | <code>typing.Union[int, float]</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway">peer_gcp_gateway</a></code> | <code>str</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp">peer_ip</a></code> | <code>str</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region">region</a></code> | <code>str</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector">remote_traffic_selector</a></code> | <code>typing.List[str]</code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router">router</a></code> | <code>str</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway">target_vpn_gateway</a></code> | <code>str</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway">vpn_gateway</a></code> | <code>str</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface">vpn_gateway_interface</a></code> | <code>typing.Union[int, float]</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#name ComputeVpnTunnel#name}

---

##### `shared_secret`<sup>Required</sup> <a name="shared_secret" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.sharedSecret"></a>

```python
shared_secret: str
```

- *Type:* str

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#shared_secret ComputeVpnTunnel#shared_secret}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#description ComputeVpnTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#id ComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ike_version`<sup>Optional</sup> <a name="ike_version" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.ikeVersion"></a>

```python
ike_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#ike_version ComputeVpnTunnel#ike_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this VpnTunnel.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#labels ComputeVpnTunnel#labels}

---

##### `local_traffic_selector`<sup>Optional</sup> <a name="local_traffic_selector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.localTrafficSelector"></a>

```python
local_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#local_traffic_selector ComputeVpnTunnel#local_traffic_selector}

---

##### `peer_external_gateway`<sup>Optional</sup> <a name="peer_external_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGateway"></a>

```python
peer_external_gateway: str
```

- *Type:* str

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#peer_external_gateway ComputeVpnTunnel#peer_external_gateway}

---

##### `peer_external_gateway_interface`<sup>Optional</sup> <a name="peer_external_gateway_interface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerExternalGatewayInterface"></a>

```python
peer_external_gateway_interface: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#peer_external_gateway_interface ComputeVpnTunnel#peer_external_gateway_interface}

---

##### `peer_gcp_gateway`<sup>Optional</sup> <a name="peer_gcp_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerGcpGateway"></a>

```python
peer_gcp_gateway: str
```

- *Type:* str

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#peer_gcp_gateway ComputeVpnTunnel#peer_gcp_gateway}

---

##### `peer_ip`<sup>Optional</sup> <a name="peer_ip" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.peerIp"></a>

```python
peer_ip: str
```

- *Type:* str

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#peer_ip ComputeVpnTunnel#peer_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#project ComputeVpnTunnel#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#region ComputeVpnTunnel#region}

---

##### `remote_traffic_selector`<sup>Optional</sup> <a name="remote_traffic_selector" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.remoteTrafficSelector"></a>

```python
remote_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#remote_traffic_selector ComputeVpnTunnel#remote_traffic_selector}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.router"></a>

```python
router: str
```

- *Type:* str

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#router ComputeVpnTunnel#router}

---

##### `target_vpn_gateway`<sup>Optional</sup> <a name="target_vpn_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.targetVpnGateway"></a>

```python
target_vpn_gateway: str
```

- *Type:* str

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#target_vpn_gateway ComputeVpnTunnel#target_vpn_gateway}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.timeouts"></a>

```python
timeouts: ComputeVpnTunnelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#timeouts ComputeVpnTunnel#timeouts}

---

##### `vpn_gateway`<sup>Optional</sup> <a name="vpn_gateway" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGateway"></a>

```python
vpn_gateway: str
```

- *Type:* str

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#vpn_gateway ComputeVpnTunnel#vpn_gateway}

---

##### `vpn_gateway_interface`<sup>Optional</sup> <a name="vpn_gateway_interface" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelConfig.property.vpnGatewayInterface"></a>

```python
vpn_gateway_interface: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#vpn_gateway_interface ComputeVpnTunnel#vpn_gateway_interface}

---

### ComputeVpnTunnelTimeouts <a name="ComputeVpnTunnelTimeouts" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_vpn_tunnel

computeVpnTunnel.ComputeVpnTunnelTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#update ComputeVpnTunnel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#create ComputeVpnTunnel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#delete ComputeVpnTunnel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_vpn_tunnel#update ComputeVpnTunnel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeVpnTunnelTimeoutsOutputReference <a name="ComputeVpnTunnelTimeoutsOutputReference" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_vpn_tunnel

computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeVpnTunnelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeVpnTunnel.ComputeVpnTunnelTimeouts">ComputeVpnTunnelTimeouts</a>]

---



