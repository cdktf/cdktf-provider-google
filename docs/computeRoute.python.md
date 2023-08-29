# `google_compute_route`

Refer to the Terraform Registory for docs: [`google_compute_route`](https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route).

# `computeRoute` Submodule <a name="`computeRoute` Submodule" id="@cdktf/provider-google.computeRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRoute <a name="ComputeRoute" id="@cdktf/provider-google.computeRoute.ComputeRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route google_compute_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_route

computeRoute.ComputeRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dest_range: str,
  name: str,
  network: str,
  description: str = None,
  id: str = None,
  next_hop_gateway: str = None,
  next_hop_ilb: str = None,
  next_hop_instance: str = None,
  next_hop_instance_zone: str = None,
  next_hop_ip: str = None,
  next_hop_vpn_tunnel: str = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  tags: typing.List[str] = None,
  timeouts: ComputeRouteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.destRange">dest_range</a></code> | <code>str</code> | The destination range of outgoing packets that this route applies to. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.network">network</a></code> | <code>str</code> | The network that this route applies to. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#id ComputeRoute#id}. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.nextHopGateway">next_hop_gateway</a></code> | <code>str</code> | URL to a gateway that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.nextHopIlb">next_hop_ilb</a></code> | <code>str</code> | The IP address or URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.nextHopInstance">next_hop_instance</a></code> | <code>str</code> | URL to an instance that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.nextHopInstanceZone">next_hop_instance_zone</a></code> | <code>str</code> | The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.nextHopIp">next_hop_ip</a></code> | <code>str</code> | Network IP address of an instance that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.nextHopVpnTunnel">next_hop_vpn_tunnel</a></code> | <code>str</code> | URL to a VpnTunnel that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of this route. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#project ComputeRoute#project}. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of instance tags to which this route applies. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts">ComputeRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dest_range`<sup>Required</sup> <a name="dest_range" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.destRange"></a>

- *Type:* str

The destination range of outgoing packets that this route applies to. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#dest_range ComputeRoute#dest_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#name ComputeRoute#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.network"></a>

- *Type:* str

The network that this route applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#network ComputeRoute#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#description ComputeRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#id ComputeRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `next_hop_gateway`<sup>Optional</sup> <a name="next_hop_gateway" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.nextHopGateway"></a>

- *Type:* str

URL to a gateway that should handle matching packets.

Currently, you can only specify the internet gateway, using a full or
partial valid URL:
'https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway'
'projects/project/global/gateways/default-internet-gateway'
'global/gateways/default-internet-gateway'
The string 'default-internet-gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#next_hop_gateway ComputeRoute#next_hop_gateway}

---

##### `next_hop_ilb`<sup>Optional</sup> <a name="next_hop_ilb" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.nextHopIlb"></a>

- *Type:* str

The IP address or URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets.

With the GA provider you can only specify the forwarding
rule as a partial or full URL. For example, the following
are all valid values:
10.128.0.56
https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule
regions/region/forwardingRules/forwardingRule

When the beta provider, you can also specify the IP address
of a forwarding rule from the same VPC or any peered VPC.

Note that this can only be used when the destinationRange is
a public (non-RFC 1918) IP CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#next_hop_ilb ComputeRoute#next_hop_ilb}

---

##### `next_hop_instance`<sup>Optional</sup> <a name="next_hop_instance" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.nextHopInstance"></a>

- *Type:* str

URL to an instance that should handle matching packets.

You can specify this as a full or partial URL. For example:
'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance'
'projects/project/zones/zone/instances/instance'
'zones/zone/instances/instance'
Just the instance name, with the zone in 'next_hop_instance_zone'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#next_hop_instance ComputeRoute#next_hop_instance}

---

##### `next_hop_instance_zone`<sup>Optional</sup> <a name="next_hop_instance_zone" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.nextHopInstanceZone"></a>

- *Type:* str

The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#next_hop_instance_zone ComputeRoute#next_hop_instance_zone}

---

##### `next_hop_ip`<sup>Optional</sup> <a name="next_hop_ip" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.nextHopIp"></a>

- *Type:* str

Network IP address of an instance that should handle matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#next_hop_ip ComputeRoute#next_hop_ip}

---

##### `next_hop_vpn_tunnel`<sup>Optional</sup> <a name="next_hop_vpn_tunnel" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.nextHopVpnTunnel"></a>

- *Type:* str

URL to a VpnTunnel that should handle matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#next_hop_vpn_tunnel ComputeRoute#next_hop_vpn_tunnel}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority of this route.

Priority is used to break ties in cases
where there is more than one matching route of equal prefix length.

In the case of two routes with equal prefix length, the one with the
lowest-numbered priority value wins.

Default value is 1000. Valid range is 0 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#priority ComputeRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#project ComputeRoute#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of instance tags to which this route applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#tags ComputeRoute#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRoute.ComputeRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts">ComputeRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#timeouts ComputeRoute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopGateway">reset_next_hop_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopIlb">reset_next_hop_ilb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopInstance">reset_next_hop_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopInstanceZone">reset_next_hop_instance_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopIp">reset_next_hop_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopVpnTunnel">reset_next_hop_vpn_tunnel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRoute.ComputeRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeRoute.ComputeRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRoute.ComputeRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRoute.ComputeRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeRoute.ComputeRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeRoute.ComputeRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeRoute.ComputeRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeRoute.ComputeRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeRoute.ComputeRoute.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRoute.ComputeRoute.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#create ComputeRoute#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRoute.ComputeRoute.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#delete ComputeRoute#delete}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_next_hop_gateway` <a name="reset_next_hop_gateway" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopGateway"></a>

```python
def reset_next_hop_gateway() -> None
```

##### `reset_next_hop_ilb` <a name="reset_next_hop_ilb" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopIlb"></a>

```python
def reset_next_hop_ilb() -> None
```

##### `reset_next_hop_instance` <a name="reset_next_hop_instance" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopInstance"></a>

```python
def reset_next_hop_instance() -> None
```

##### `reset_next_hop_instance_zone` <a name="reset_next_hop_instance_zone" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopInstanceZone"></a>

```python
def reset_next_hop_instance_zone() -> None
```

##### `reset_next_hop_ip` <a name="reset_next_hop_ip" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopIp"></a>

```python
def reset_next_hop_ip() -> None
```

##### `reset_next_hop_vpn_tunnel` <a name="reset_next_hop_vpn_tunnel" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetNextHopVpnTunnel"></a>

```python
def reset_next_hop_vpn_tunnel() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeRoute.ComputeRoute.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeRoute.ComputeRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_route

computeRoute.ComputeRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRoute.ComputeRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeRoute.ComputeRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_route

computeRoute.ComputeRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRoute.ComputeRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeRoute.ComputeRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_route

computeRoute.ComputeRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRoute.ComputeRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopNetwork">next_hop_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference">ComputeRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.destRangeInput">dest_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopGatewayInput">next_hop_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIlbInput">next_hop_ilb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstanceInput">next_hop_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstanceZoneInput">next_hop_instance_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIpInput">next_hop_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopVpnTunnelInput">next_hop_vpn_tunnel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts">ComputeRouteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.destRange">dest_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopGateway">next_hop_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIlb">next_hop_ilb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstance">next_hop_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstanceZone">next_hop_instance_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIp">next_hop_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopVpnTunnel">next_hop_vpn_tunnel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `next_hop_network`<sup>Required</sup> <a name="next_hop_network" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopNetwork"></a>

```python
next_hop_network: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.timeouts"></a>

```python
timeouts: ComputeRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference">ComputeRouteTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dest_range_input`<sup>Optional</sup> <a name="dest_range_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.destRangeInput"></a>

```python
dest_range_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `next_hop_gateway_input`<sup>Optional</sup> <a name="next_hop_gateway_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopGatewayInput"></a>

```python
next_hop_gateway_input: str
```

- *Type:* str

---

##### `next_hop_ilb_input`<sup>Optional</sup> <a name="next_hop_ilb_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIlbInput"></a>

```python
next_hop_ilb_input: str
```

- *Type:* str

---

##### `next_hop_instance_input`<sup>Optional</sup> <a name="next_hop_instance_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstanceInput"></a>

```python
next_hop_instance_input: str
```

- *Type:* str

---

##### `next_hop_instance_zone_input`<sup>Optional</sup> <a name="next_hop_instance_zone_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstanceZoneInput"></a>

```python
next_hop_instance_zone_input: str
```

- *Type:* str

---

##### `next_hop_ip_input`<sup>Optional</sup> <a name="next_hop_ip_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIpInput"></a>

```python
next_hop_ip_input: str
```

- *Type:* str

---

##### `next_hop_vpn_tunnel_input`<sup>Optional</sup> <a name="next_hop_vpn_tunnel_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopVpnTunnelInput"></a>

```python
next_hop_vpn_tunnel_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts">ComputeRouteTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dest_range`<sup>Required</sup> <a name="dest_range" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.destRange"></a>

```python
dest_range: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `next_hop_gateway`<sup>Required</sup> <a name="next_hop_gateway" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopGateway"></a>

```python
next_hop_gateway: str
```

- *Type:* str

---

##### `next_hop_ilb`<sup>Required</sup> <a name="next_hop_ilb" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIlb"></a>

```python
next_hop_ilb: str
```

- *Type:* str

---

##### `next_hop_instance`<sup>Required</sup> <a name="next_hop_instance" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstance"></a>

```python
next_hop_instance: str
```

- *Type:* str

---

##### `next_hop_instance_zone`<sup>Required</sup> <a name="next_hop_instance_zone" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopInstanceZone"></a>

```python
next_hop_instance_zone: str
```

- *Type:* str

---

##### `next_hop_ip`<sup>Required</sup> <a name="next_hop_ip" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopIp"></a>

```python
next_hop_ip: str
```

- *Type:* str

---

##### `next_hop_vpn_tunnel`<sup>Required</sup> <a name="next_hop_vpn_tunnel" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.nextHopVpnTunnel"></a>

```python
next_hop_vpn_tunnel: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRoute.ComputeRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouteConfig <a name="ComputeRouteConfig" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_route

computeRoute.ComputeRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dest_range: str,
  name: str,
  network: str,
  description: str = None,
  id: str = None,
  next_hop_gateway: str = None,
  next_hop_ilb: str = None,
  next_hop_instance: str = None,
  next_hop_instance_zone: str = None,
  next_hop_ip: str = None,
  next_hop_vpn_tunnel: str = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  tags: typing.List[str] = None,
  timeouts: ComputeRouteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.destRange">dest_range</a></code> | <code>str</code> | The destination range of outgoing packets that this route applies to. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.network">network</a></code> | <code>str</code> | The network that this route applies to. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#id ComputeRoute#id}. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopGateway">next_hop_gateway</a></code> | <code>str</code> | URL to a gateway that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopIlb">next_hop_ilb</a></code> | <code>str</code> | The IP address or URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopInstance">next_hop_instance</a></code> | <code>str</code> | URL to an instance that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopInstanceZone">next_hop_instance_zone</a></code> | <code>str</code> | The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopIp">next_hop_ip</a></code> | <code>str</code> | Network IP address of an instance that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopVpnTunnel">next_hop_vpn_tunnel</a></code> | <code>str</code> | URL to a VpnTunnel that should handle matching packets. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of this route. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#project ComputeRoute#project}. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of instance tags to which this route applies. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts">ComputeRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dest_range`<sup>Required</sup> <a name="dest_range" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.destRange"></a>

```python
dest_range: str
```

- *Type:* str

The destination range of outgoing packets that this route applies to. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#dest_range ComputeRoute#dest_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#name ComputeRoute#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The network that this route applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#network ComputeRoute#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#description ComputeRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#id ComputeRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `next_hop_gateway`<sup>Optional</sup> <a name="next_hop_gateway" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopGateway"></a>

```python
next_hop_gateway: str
```

- *Type:* str

URL to a gateway that should handle matching packets.

Currently, you can only specify the internet gateway, using a full or
partial valid URL:
'https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway'
'projects/project/global/gateways/default-internet-gateway'
'global/gateways/default-internet-gateway'
The string 'default-internet-gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#next_hop_gateway ComputeRoute#next_hop_gateway}

---

##### `next_hop_ilb`<sup>Optional</sup> <a name="next_hop_ilb" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopIlb"></a>

```python
next_hop_ilb: str
```

- *Type:* str

The IP address or URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets.

With the GA provider you can only specify the forwarding
rule as a partial or full URL. For example, the following
are all valid values:
10.128.0.56
https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule
regions/region/forwardingRules/forwardingRule

When the beta provider, you can also specify the IP address
of a forwarding rule from the same VPC or any peered VPC.

Note that this can only be used when the destinationRange is
a public (non-RFC 1918) IP CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#next_hop_ilb ComputeRoute#next_hop_ilb}

---

##### `next_hop_instance`<sup>Optional</sup> <a name="next_hop_instance" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopInstance"></a>

```python
next_hop_instance: str
```

- *Type:* str

URL to an instance that should handle matching packets.

You can specify this as a full or partial URL. For example:
'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance'
'projects/project/zones/zone/instances/instance'
'zones/zone/instances/instance'
Just the instance name, with the zone in 'next_hop_instance_zone'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#next_hop_instance ComputeRoute#next_hop_instance}

---

##### `next_hop_instance_zone`<sup>Optional</sup> <a name="next_hop_instance_zone" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopInstanceZone"></a>

```python
next_hop_instance_zone: str
```

- *Type:* str

The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#next_hop_instance_zone ComputeRoute#next_hop_instance_zone}

---

##### `next_hop_ip`<sup>Optional</sup> <a name="next_hop_ip" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopIp"></a>

```python
next_hop_ip: str
```

- *Type:* str

Network IP address of an instance that should handle matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#next_hop_ip ComputeRoute#next_hop_ip}

---

##### `next_hop_vpn_tunnel`<sup>Optional</sup> <a name="next_hop_vpn_tunnel" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.nextHopVpnTunnel"></a>

```python
next_hop_vpn_tunnel: str
```

- *Type:* str

URL to a VpnTunnel that should handle matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#next_hop_vpn_tunnel ComputeRoute#next_hop_vpn_tunnel}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of this route.

Priority is used to break ties in cases
where there is more than one matching route of equal prefix length.

In the case of two routes with equal prefix length, the one with the
lowest-numbered priority value wins.

Default value is 1000. Valid range is 0 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#priority ComputeRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#project ComputeRoute#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of instance tags to which this route applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#tags ComputeRoute#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRoute.ComputeRouteConfig.property.timeouts"></a>

```python
timeouts: ComputeRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts">ComputeRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#timeouts ComputeRoute#timeouts}

---

### ComputeRouteTimeouts <a name="ComputeRouteTimeouts" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_route

computeRoute.ComputeRouteTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#create ComputeRoute#create}. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#delete ComputeRoute#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#create ComputeRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/compute_route#delete ComputeRoute#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouteTimeoutsOutputReference <a name="ComputeRouteTimeoutsOutputReference" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_route

computeRoute.ComputeRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts">ComputeRouteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRoute.ComputeRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRoute.ComputeRouteTimeouts">ComputeRouteTimeouts</a>]

---



