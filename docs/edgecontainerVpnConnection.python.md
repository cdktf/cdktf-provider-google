# `google_edgecontainer_vpn_connection`

Refer to the Terraform Registory for docs: [`google_edgecontainer_vpn_connection`](https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection).

# `edgecontainerVpnConnection` Submodule <a name="`edgecontainerVpnConnection` Submodule" id="@cdktf/provider-google.edgecontainerVpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EdgecontainerVpnConnection <a name="EdgecontainerVpnConnection" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection google_edgecontainer_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  location: str,
  name: str,
  enable_high_availability: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  nat_gateway_ip: str = None,
  project: str = None,
  router: str = None,
  timeouts: EdgecontainerVpnConnectionTimeouts = None,
  vpc: str = None,
  vpc_project: EdgecontainerVpnConnectionVpcProject = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.location">location</a></code> | <code>str</code> | Google Cloud Platform location. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of VPN connection. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.enableHighAvailability">enable_high_availability</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this VPN connection has HA enabled on cluster side. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#id EdgecontainerVpnConnection#id}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.natGatewayIp">nat_gateway_ip</a></code> | <code>str</code> | NAT gateway IP, or WAN IP address. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#project EdgecontainerVpnConnection#project}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.router">router</a></code> | <code>str</code> | The VPN connection Cloud Router name. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.vpc">vpc</a></code> | <code>str</code> | The network ID of VPC to connect to. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.vpcProject">vpc_project</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a></code> | vpc_project block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.cluster"></a>

- *Type:* str

The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#cluster EdgecontainerVpnConnection#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.location"></a>

- *Type:* str

Google Cloud Platform location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#location EdgecontainerVpnConnection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.name"></a>

- *Type:* str

The resource name of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#name EdgecontainerVpnConnection#name}

---

##### `enable_high_availability`<sup>Optional</sup> <a name="enable_high_availability" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.enableHighAvailability"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this VPN connection has HA enabled on cluster side.

If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#enable_high_availability EdgecontainerVpnConnection#enable_high_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#id EdgecontainerVpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#labels EdgecontainerVpnConnection#labels}

---

##### `nat_gateway_ip`<sup>Optional</sup> <a name="nat_gateway_ip" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.natGatewayIp"></a>

- *Type:* str

NAT gateway IP, or WAN IP address.

If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#nat_gateway_ip EdgecontainerVpnConnection#nat_gateway_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#project EdgecontainerVpnConnection#project}.

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.router"></a>

- *Type:* str

The VPN connection Cloud Router name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#router EdgecontainerVpnConnection#router}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#timeouts EdgecontainerVpnConnection#timeouts}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.vpc"></a>

- *Type:* str

The network ID of VPC to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#vpc EdgecontainerVpnConnection#vpc}

---

##### `vpc_project`<sup>Optional</sup> <a name="vpc_project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.vpcProject"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

vpc_project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#vpc_project EdgecontainerVpnConnection#vpc_project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putVpcProject">put_vpc_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetEnableHighAvailability">reset_enable_high_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetNatGatewayIp">reset_nat_gateway_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetRouter">reset_router</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpc">reset_vpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpcProject">reset_vpc_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#create EdgecontainerVpnConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#delete EdgecontainerVpnConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#update EdgecontainerVpnConnection#update}.

---

##### `put_vpc_project` <a name="put_vpc_project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putVpcProject"></a>

```python
def put_vpc_project(
  project_id: str = None
) -> None
```

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putVpcProject.parameter.projectId"></a>

- *Type:* str

The project of the VPC to connect to. If not specified, it is the same as the cluster project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#project_id EdgecontainerVpnConnection#project_id}

---

##### `reset_enable_high_availability` <a name="reset_enable_high_availability" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetEnableHighAvailability"></a>

```python
def reset_enable_high_availability() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_nat_gateway_ip` <a name="reset_nat_gateway_ip" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetNatGatewayIp"></a>

```python
def reset_nat_gateway_ip() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_router` <a name="reset_router" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetRouter"></a>

```python
def reset_router() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc` <a name="reset_vpc" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpc"></a>

```python
def reset_vpc() -> None
```

##### `reset_vpc_project` <a name="reset_vpc_project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpcProject"></a>

```python
def reset_vpc_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EdgecontainerVpnConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EdgecontainerVpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EdgecontainerVpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.details">details</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList">EdgecontainerVpnConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference">EdgecontainerVpnConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProject">vpc_project</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference">EdgecontainerVpnConnectionVpcProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailabilityInput">enable_high_availability_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIpInput">nat_gateway_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.routerInput">router_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcInput">vpc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProjectInput">vpc_project_input</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailability">enable_high_availability</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIp">nat_gateway_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.router">router</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpc">vpc</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.details"></a>

```python
details: EdgecontainerVpnConnectionDetailsList
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList">EdgecontainerVpnConnectionDetailsList</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeouts"></a>

```python
timeouts: EdgecontainerVpnConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference">EdgecontainerVpnConnectionTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `vpc_project`<sup>Required</sup> <a name="vpc_project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProject"></a>

```python
vpc_project: EdgecontainerVpnConnectionVpcProjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference">EdgecontainerVpnConnectionVpcProjectOutputReference</a>

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `enable_high_availability_input`<sup>Optional</sup> <a name="enable_high_availability_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailabilityInput"></a>

```python
enable_high_availability_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nat_gateway_ip_input`<sup>Optional</sup> <a name="nat_gateway_ip_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIpInput"></a>

```python
nat_gateway_ip_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `router_input`<sup>Optional</sup> <a name="router_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.routerInput"></a>

```python
router_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EdgecontainerVpnConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>]

---

##### `vpc_input`<sup>Optional</sup> <a name="vpc_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcInput"></a>

```python
vpc_input: str
```

- *Type:* str

---

##### `vpc_project_input`<sup>Optional</sup> <a name="vpc_project_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProjectInput"></a>

```python
vpc_project_input: EdgecontainerVpnConnectionVpcProject
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `enable_high_availability`<sup>Required</sup> <a name="enable_high_availability" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailability"></a>

```python
enable_high_availability: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nat_gateway_ip`<sup>Required</sup> <a name="nat_gateway_ip" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIp"></a>

```python
nat_gateway_ip: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.router"></a>

```python
router: str
```

- *Type:* str

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpc"></a>

```python
vpc: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EdgecontainerVpnConnectionConfig <a name="EdgecontainerVpnConnectionConfig" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  location: str,
  name: str,
  enable_high_availability: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  nat_gateway_ip: str = None,
  project: str = None,
  router: str = None,
  timeouts: EdgecontainerVpnConnectionTimeouts = None,
  vpc: str = None,
  vpc_project: EdgecontainerVpnConnectionVpcProject = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.cluster">cluster</a></code> | <code>str</code> | The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.location">location</a></code> | <code>str</code> | Google Cloud Platform location. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.name">name</a></code> | <code>str</code> | The resource name of VPN connection. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.enableHighAvailability">enable_high_availability</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this VPN connection has HA enabled on cluster side. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#id EdgecontainerVpnConnection#id}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.natGatewayIp">nat_gateway_ip</a></code> | <code>str</code> | NAT gateway IP, or WAN IP address. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#project EdgecontainerVpnConnection#project}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.router">router</a></code> | <code>str</code> | The VPN connection Cloud Router name. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpc">vpc</a></code> | <code>str</code> | The network ID of VPC to connect to. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpcProject">vpc_project</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a></code> | vpc_project block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#cluster EdgecontainerVpnConnection#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Google Cloud Platform location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#location EdgecontainerVpnConnection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#name EdgecontainerVpnConnection#name}

---

##### `enable_high_availability`<sup>Optional</sup> <a name="enable_high_availability" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.enableHighAvailability"></a>

```python
enable_high_availability: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this VPN connection has HA enabled on cluster side.

If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#enable_high_availability EdgecontainerVpnConnection#enable_high_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#id EdgecontainerVpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#labels EdgecontainerVpnConnection#labels}

---

##### `nat_gateway_ip`<sup>Optional</sup> <a name="nat_gateway_ip" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.natGatewayIp"></a>

```python
nat_gateway_ip: str
```

- *Type:* str

NAT gateway IP, or WAN IP address.

If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#nat_gateway_ip EdgecontainerVpnConnection#nat_gateway_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#project EdgecontainerVpnConnection#project}.

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.router"></a>

```python
router: str
```

- *Type:* str

The VPN connection Cloud Router name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#router EdgecontainerVpnConnection#router}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.timeouts"></a>

```python
timeouts: EdgecontainerVpnConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#timeouts EdgecontainerVpnConnection#timeouts}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpc"></a>

```python
vpc: str
```

- *Type:* str

The network ID of VPC to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#vpc EdgecontainerVpnConnection#vpc}

---

##### `vpc_project`<sup>Optional</sup> <a name="vpc_project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpcProject"></a>

```python
vpc_project: EdgecontainerVpnConnectionVpcProject
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

vpc_project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#vpc_project EdgecontainerVpnConnection#vpc_project}

---

### EdgecontainerVpnConnectionDetails <a name="EdgecontainerVpnConnectionDetails" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails()
```


### EdgecontainerVpnConnectionDetailsCloudRouter <a name="EdgecontainerVpnConnectionDetailsCloudRouter" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter()
```


### EdgecontainerVpnConnectionDetailsCloudVpns <a name="EdgecontainerVpnConnectionDetailsCloudVpns" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns()
```


### EdgecontainerVpnConnectionTimeouts <a name="EdgecontainerVpnConnectionTimeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#create EdgecontainerVpnConnection#create}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#delete EdgecontainerVpnConnection#delete}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#update EdgecontainerVpnConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#create EdgecontainerVpnConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#delete EdgecontainerVpnConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#update EdgecontainerVpnConnection#update}.

---

### EdgecontainerVpnConnectionVpcProject <a name="EdgecontainerVpnConnectionVpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject(
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject.property.projectId">project_id</a></code> | <code>str</code> | The project of the VPC to connect to. If not specified, it is the same as the cluster project. |

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The project of the VPC to connect to. If not specified, it is the same as the cluster project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/edgecontainer_vpn_connection#project_id EdgecontainerVpnConnection#project_id}

---

## Classes <a name="Classes" id="Classes"></a>

### EdgecontainerVpnConnectionDetailsCloudRouterList <a name="EdgecontainerVpnConnectionDetailsCloudRouterList" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EdgecontainerVpnConnectionDetailsCloudRouterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EdgecontainerVpnConnectionDetailsCloudRouterOutputReference <a name="EdgecontainerVpnConnectionDetailsCloudRouterOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter">EdgecontainerVpnConnectionDetailsCloudRouter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue"></a>

```python
internal_value: EdgecontainerVpnConnectionDetailsCloudRouter
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter">EdgecontainerVpnConnectionDetailsCloudRouter</a>

---


### EdgecontainerVpnConnectionDetailsCloudVpnsList <a name="EdgecontainerVpnConnectionDetailsCloudVpnsList" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference <a name="EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns">EdgecontainerVpnConnectionDetailsCloudVpns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue"></a>

```python
internal_value: EdgecontainerVpnConnectionDetailsCloudVpns
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns">EdgecontainerVpnConnectionDetailsCloudVpns</a>

---


### EdgecontainerVpnConnectionDetailsList <a name="EdgecontainerVpnConnectionDetailsList" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EdgecontainerVpnConnectionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### EdgecontainerVpnConnectionDetailsOutputReference <a name="EdgecontainerVpnConnectionDetailsOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter">cloud_router</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList">EdgecontainerVpnConnectionDetailsCloudRouterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns">cloud_vpns</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList">EdgecontainerVpnConnectionDetailsCloudVpnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.error">error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails">EdgecontainerVpnConnectionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_router`<sup>Required</sup> <a name="cloud_router" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter"></a>

```python
cloud_router: EdgecontainerVpnConnectionDetailsCloudRouterList
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList">EdgecontainerVpnConnectionDetailsCloudRouterList</a>

---

##### `cloud_vpns`<sup>Required</sup> <a name="cloud_vpns" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns"></a>

```python
cloud_vpns: EdgecontainerVpnConnectionDetailsCloudVpnsList
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList">EdgecontainerVpnConnectionDetailsCloudVpnsList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.error"></a>

```python
error: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: EdgecontainerVpnConnectionDetails
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails">EdgecontainerVpnConnectionDetails</a>

---


### EdgecontainerVpnConnectionTimeoutsOutputReference <a name="EdgecontainerVpnConnectionTimeoutsOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EdgecontainerVpnConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>]

---


### EdgecontainerVpnConnectionVpcProjectOutputReference <a name="EdgecontainerVpnConnectionVpcProjectOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_vpn_connection

edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue"></a>

```python
internal_value: EdgecontainerVpnConnectionVpcProject
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

---



