# `computeSubnetwork` Submodule <a name="`computeSubnetwork` Submodule" id="@cdktf/provider-google.computeSubnetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSubnetwork <a name="ComputeSubnetwork" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork google_compute_subnetwork}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_subnetwork

computeSubnetwork.ComputeSubnetwork(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_cidr_range: str,
  name: str,
  network: str,
  description: str = None,
  id: str = None,
  ipv6_access_type: str = None,
  log_config: ComputeSubnetworkLogConfig = None,
  private_ip_google_access: typing.Union[bool, IResolvable] = None,
  private_ipv6_google_access: str = None,
  project: str = None,
  purpose: str = None,
  region: str = None,
  role: str = None,
  secondary_ip_range: typing.Union[IResolvable, typing.List[ComputeSubnetworkSecondaryIpRange]] = None,
  stack_type: str = None,
  timeouts: ComputeSubnetworkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The range of internal addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.network">network</a></code> | <code>str</code> | The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#id ComputeSubnetwork#id}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.ipv6AccessType">ipv6_access_type</a></code> | <code>str</code> | The access type of IPv6 address this subnet holds. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.privateIpGoogleAccess">private_ip_google_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.privateIpv6GoogleAccess">private_ipv6_google_access</a></code> | <code>str</code> | The private IPv6 google access type for the VMs in this subnet. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#project ComputeSubnetwork#project}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.purpose">purpose</a></code> | <code>str</code> | The purpose of the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.region">region</a></code> | <code>str</code> | The GCP region for this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.role">role</a></code> | <code>str</code> | The role of subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.secondaryIpRange">secondary_ip_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>]]</code> | An array of configurations for secondary IP ranges for VM instances contained in this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.stackType">stack_type</a></code> | <code>str</code> | The stack type for this subnet to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.ipCidrRange"></a>

- *Type:* str

The range of internal addresses that are owned by this subnetwork.

Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.name"></a>

- *Type:* str

The name of the resource, provided by the client when initially creating the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#name ComputeSubnetwork#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.network"></a>

- *Type:* str

The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#network ComputeSubnetwork#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Provide this property when
you create the resource. This field can be set only at resource
creation time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#description ComputeSubnetwork#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#id ComputeSubnetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_access_type`<sup>Optional</sup> <a name="ipv6_access_type" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.ipv6AccessType"></a>

- *Type:* str

The access type of IPv6 address this subnet holds.

It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path. Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#ipv6_access_type ComputeSubnetwork#ipv6_access_type}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#log_config ComputeSubnetwork#log_config}

---

##### `private_ip_google_access`<sup>Optional</sup> <a name="private_ip_google_access" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.privateIpGoogleAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#private_ip_google_access ComputeSubnetwork#private_ip_google_access}

---

##### `private_ipv6_google_access`<sup>Optional</sup> <a name="private_ipv6_google_access" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.privateIpv6GoogleAccess"></a>

- *Type:* str

The private IPv6 google access type for the VMs in this subnet.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#private_ipv6_google_access ComputeSubnetwork#private_ipv6_google_access}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#project ComputeSubnetwork#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.purpose"></a>

- *Type:* str

The purpose of the resource.

A subnetwork with purpose set to
INTERNAL_HTTPS_LOAD_BALANCER is a user-created subnetwork that is
reserved for Internal HTTP(S) Load Balancing.

If set to INTERNAL_HTTPS_LOAD_BALANCER you must also set the 'role' field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#purpose ComputeSubnetwork#purpose}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.region"></a>

- *Type:* str

The GCP region for this subnetwork.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#region ComputeSubnetwork#region}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.role"></a>

- *Type:* str

The role of subnetwork.

Currently, this field is only used when
purpose = INTERNAL_HTTPS_LOAD_BALANCER. The value can be set to ACTIVE
or BACKUP. An ACTIVE subnetwork is one that is currently being used
for Internal HTTP(S) Load Balancing. A BACKUP subnetwork is one that
is ready to be promoted to ACTIVE or is currently draining. Possible values: ["ACTIVE", "BACKUP"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#role ComputeSubnetwork#role}

---

##### `secondary_ip_range`<sup>Optional</sup> <a name="secondary_ip_range" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.secondaryIpRange"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>]]

An array of configurations for secondary IP ranges for VM instances contained in this subnetwork.

The primary IP of such VM must belong
to the primary ipCidrRange of the subnetwork. The alias IPs may belong
to either primary or secondary ranges.

*Note**: This field uses [attr-as-block mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html) to avoid
breaking users during the 0.12 upgrade. To explicitly send a list
of zero objects you must use the following syntax:
'example=[]'
For more details about this behavior, see [this section](https://www.terraform.io/docs/configuration/attr-as-blocks.html#defining-a-fixed-object-collection-value).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#secondary_ip_range ComputeSubnetwork#secondary_ip_range}

---

##### `stack_type`<sup>Optional</sup> <a name="stack_type" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.stackType"></a>

- *Type:* str

The stack type for this subnet to identify whether the IPv6 feature is enabled or not.

If not specified IPV4_ONLY will be used. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#stack_type ComputeSubnetwork#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#timeouts ComputeSubnetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange">put_secondary_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpv6AccessType">reset_ipv6_access_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpGoogleAccess">reset_private_ip_google_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpv6GoogleAccess">reset_private_ipv6_google_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPurpose">reset_purpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSecondaryIpRange">reset_secondary_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetStackType">reset_stack_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_log_config` <a name="put_log_config" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig"></a>

```python
def put_log_config(
  aggregation_interval: str = None,
  filter_expr: str = None,
  flow_sampling: typing.Union[int, float] = None,
  metadata: str = None,
  metadata_fields: typing.List[str] = None
) -> None
```

###### `aggregation_interval`<sup>Optional</sup> <a name="aggregation_interval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig.parameter.aggregationInterval"></a>

- *Type:* str

Can only be specified if VPC flow logging for this subnetwork is enabled.

Toggles the aggregation interval for collecting flow logs. Increasing the
interval time will reduce the amount of generated flow logs for long
lasting connections. Default is an interval of 5 seconds per connection. Default value: "INTERVAL_5_SEC" Possible values: ["INTERVAL_5_SEC", "INTERVAL_30_SEC", "INTERVAL_1_MIN", "INTERVAL_5_MIN", "INTERVAL_10_MIN", "INTERVAL_15_MIN"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#aggregation_interval ComputeSubnetwork#aggregation_interval}

---

###### `filter_expr`<sup>Optional</sup> <a name="filter_expr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig.parameter.filterExpr"></a>

- *Type:* str

Export filter used to define which VPC flow logs should be logged, as as CEL expression.

See
https://cloud.google.com/vpc/docs/flow-logs#filtering for details on how to format this field.
The default value is 'true', which evaluates to include everything.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#filter_expr ComputeSubnetwork#filter_expr}

---

###### `flow_sampling`<sup>Optional</sup> <a name="flow_sampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig.parameter.flowSampling"></a>

- *Type:* typing.Union[int, float]

Can only be specified if VPC flow logging for this subnetwork is enabled.

The value of the field must be in [0, 1]. Set the sampling rate of VPC
flow logs within the subnetwork where 1.0 means all collected logs are
reported and 0.0 means no logs are reported. Default is 0.5 which means
half of all collected logs are reported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#flow_sampling ComputeSubnetwork#flow_sampling}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig.parameter.metadata"></a>

- *Type:* str

Can only be specified if VPC flow logging for this subnetwork is enabled.

Configures whether metadata fields should be added to the reported VPC
flow logs. Default value: "INCLUDE_ALL_METADATA" Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA", "CUSTOM_METADATA"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#metadata ComputeSubnetwork#metadata}

---

###### `metadata_fields`<sup>Optional</sup> <a name="metadata_fields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig.parameter.metadataFields"></a>

- *Type:* typing.List[str]

List of metadata fields that should be added to reported logs.

Can only be specified if VPC flow logs for this subnetwork is enabled and "metadata" is set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#metadata_fields ComputeSubnetwork#metadata_fields}

---

##### `put_secondary_ip_range` <a name="put_secondary_ip_range" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange"></a>

```python
def put_secondary_ip_range(
  value: typing.Union[IResolvable, typing.List[ComputeSubnetworkSecondaryIpRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#create ComputeSubnetwork#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#delete ComputeSubnetwork#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#update ComputeSubnetwork#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipv6_access_type` <a name="reset_ipv6_access_type" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpv6AccessType"></a>

```python
def reset_ipv6_access_type() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_private_ip_google_access` <a name="reset_private_ip_google_access" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpGoogleAccess"></a>

```python
def reset_private_ip_google_access() -> None
```

##### `reset_private_ipv6_google_access` <a name="reset_private_ipv6_google_access" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpv6GoogleAccess"></a>

```python
def reset_private_ipv6_google_access() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_purpose` <a name="reset_purpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPurpose"></a>

```python
def reset_purpose() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_secondary_ip_range` <a name="reset_secondary_ip_range" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSecondaryIpRange"></a>

```python
def reset_secondary_ip_range() -> None
```

##### `reset_stack_type` <a name="reset_stack_type" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetStackType"></a>

```python
def reset_stack_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_subnetwork

computeSubnetwork.ComputeSubnetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_subnetwork

computeSubnetwork.ComputeSubnetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_subnetwork

computeSubnetwork.ComputeSubnetwork.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6Prefix">external_ipv6_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.gatewayAddress">gateway_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6CidrRange">ipv6_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference">ComputeSubnetworkLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRange">secondary_ip_range</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList">ComputeSubnetworkSecondaryIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference">ComputeSubnetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRangeInput">ip_cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessTypeInput">ipv6_access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfigInput">log_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccessInput">private_ip_google_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccessInput">private_ipv6_google_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purposeInput">purpose_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRangeInput">secondary_ip_range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackTypeInput">stack_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessType">ipv6_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccess">private_ip_google_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccess">private_ipv6_google_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purpose">purpose</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackType">stack_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `external_ipv6_prefix`<sup>Required</sup> <a name="external_ipv6_prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6Prefix"></a>

```python
external_ipv6_prefix: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `gateway_address`<sup>Required</sup> <a name="gateway_address" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.gatewayAddress"></a>

```python
gateway_address: str
```

- *Type:* str

---

##### `ipv6_cidr_range`<sup>Required</sup> <a name="ipv6_cidr_range" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6CidrRange"></a>

```python
ipv6_cidr_range: str
```

- *Type:* str

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfig"></a>

```python
log_config: ComputeSubnetworkLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference">ComputeSubnetworkLogConfigOutputReference</a>

---

##### `secondary_ip_range`<sup>Required</sup> <a name="secondary_ip_range" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRange"></a>

```python
secondary_ip_range: ComputeSubnetworkSecondaryIpRangeList
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList">ComputeSubnetworkSecondaryIpRangeList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeouts"></a>

```python
timeouts: ComputeSubnetworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference">ComputeSubnetworkTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_cidr_range_input`<sup>Optional</sup> <a name="ip_cidr_range_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRangeInput"></a>

```python
ip_cidr_range_input: str
```

- *Type:* str

---

##### `ipv6_access_type_input`<sup>Optional</sup> <a name="ipv6_access_type_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessTypeInput"></a>

```python
ipv6_access_type_input: str
```

- *Type:* str

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfigInput"></a>

```python
log_config_input: ComputeSubnetworkLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `private_ip_google_access_input`<sup>Optional</sup> <a name="private_ip_google_access_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccessInput"></a>

```python
private_ip_google_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_ipv6_google_access_input`<sup>Optional</sup> <a name="private_ipv6_google_access_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccessInput"></a>

```python
private_ipv6_google_access_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `purpose_input`<sup>Optional</sup> <a name="purpose_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purposeInput"></a>

```python
purpose_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `secondary_ip_range_input`<sup>Optional</sup> <a name="secondary_ip_range_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRangeInput"></a>

```python
secondary_ip_range_input: typing.Union[IResolvable, typing.List[ComputeSubnetworkSecondaryIpRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>]]

---

##### `stack_type_input`<sup>Optional</sup> <a name="stack_type_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackTypeInput"></a>

```python
stack_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ComputeSubnetworkTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `ipv6_access_type`<sup>Required</sup> <a name="ipv6_access_type" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessType"></a>

```python
ipv6_access_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `private_ip_google_access`<sup>Required</sup> <a name="private_ip_google_access" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccess"></a>

```python
private_ip_google_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_ipv6_google_access`<sup>Required</sup> <a name="private_ipv6_google_access" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccess"></a>

```python
private_ipv6_google_access: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `stack_type`<sup>Required</sup> <a name="stack_type" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSubnetworkConfig <a name="ComputeSubnetworkConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_subnetwork

computeSubnetwork.ComputeSubnetworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_cidr_range: str,
  name: str,
  network: str,
  description: str = None,
  id: str = None,
  ipv6_access_type: str = None,
  log_config: ComputeSubnetworkLogConfig = None,
  private_ip_google_access: typing.Union[bool, IResolvable] = None,
  private_ipv6_google_access: str = None,
  project: str = None,
  purpose: str = None,
  region: str = None,
  role: str = None,
  secondary_ip_range: typing.Union[IResolvable, typing.List[ComputeSubnetworkSecondaryIpRange]] = None,
  stack_type: str = None,
  timeouts: ComputeSubnetworkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The range of internal addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.name">name</a></code> | <code>str</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.network">network</a></code> | <code>str</code> | The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#id ComputeSubnetwork#id}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipv6AccessType">ipv6_access_type</a></code> | <code>str</code> | The access type of IPv6 address this subnet holds. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpGoogleAccess">private_ip_google_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpv6GoogleAccess">private_ipv6_google_access</a></code> | <code>str</code> | The private IPv6 google access type for the VMs in this subnet. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#project ComputeSubnetwork#project}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.purpose">purpose</a></code> | <code>str</code> | The purpose of the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.region">region</a></code> | <code>str</code> | The GCP region for this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.role">role</a></code> | <code>str</code> | The role of subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.secondaryIpRange">secondary_ip_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>]]</code> | An array of configurations for secondary IP ranges for VM instances contained in this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.stackType">stack_type</a></code> | <code>str</code> | The stack type for this subnet to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

The range of internal addresses that are owned by this subnetwork.

Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the resource, provided by the client when initially creating the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#name ComputeSubnetwork#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#network ComputeSubnetwork#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Provide this property when
you create the resource. This field can be set only at resource
creation time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#description ComputeSubnetwork#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#id ComputeSubnetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6_access_type`<sup>Optional</sup> <a name="ipv6_access_type" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipv6AccessType"></a>

```python
ipv6_access_type: str
```

- *Type:* str

The access type of IPv6 address this subnet holds.

It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path. Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#ipv6_access_type ComputeSubnetwork#ipv6_access_type}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.logConfig"></a>

```python
log_config: ComputeSubnetworkLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#log_config ComputeSubnetwork#log_config}

---

##### `private_ip_google_access`<sup>Optional</sup> <a name="private_ip_google_access" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpGoogleAccess"></a>

```python
private_ip_google_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#private_ip_google_access ComputeSubnetwork#private_ip_google_access}

---

##### `private_ipv6_google_access`<sup>Optional</sup> <a name="private_ipv6_google_access" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpv6GoogleAccess"></a>

```python
private_ipv6_google_access: str
```

- *Type:* str

The private IPv6 google access type for the VMs in this subnet.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#private_ipv6_google_access ComputeSubnetwork#private_ipv6_google_access}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#project ComputeSubnetwork#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

The purpose of the resource.

A subnetwork with purpose set to
INTERNAL_HTTPS_LOAD_BALANCER is a user-created subnetwork that is
reserved for Internal HTTP(S) Load Balancing.

If set to INTERNAL_HTTPS_LOAD_BALANCER you must also set the 'role' field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#purpose ComputeSubnetwork#purpose}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The GCP region for this subnetwork.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#region ComputeSubnetwork#region}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.role"></a>

```python
role: str
```

- *Type:* str

The role of subnetwork.

Currently, this field is only used when
purpose = INTERNAL_HTTPS_LOAD_BALANCER. The value can be set to ACTIVE
or BACKUP. An ACTIVE subnetwork is one that is currently being used
for Internal HTTP(S) Load Balancing. A BACKUP subnetwork is one that
is ready to be promoted to ACTIVE or is currently draining. Possible values: ["ACTIVE", "BACKUP"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#role ComputeSubnetwork#role}

---

##### `secondary_ip_range`<sup>Optional</sup> <a name="secondary_ip_range" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.secondaryIpRange"></a>

```python
secondary_ip_range: typing.Union[IResolvable, typing.List[ComputeSubnetworkSecondaryIpRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>]]

An array of configurations for secondary IP ranges for VM instances contained in this subnetwork.

The primary IP of such VM must belong
to the primary ipCidrRange of the subnetwork. The alias IPs may belong
to either primary or secondary ranges.

*Note**: This field uses [attr-as-block mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html) to avoid
breaking users during the 0.12 upgrade. To explicitly send a list
of zero objects you must use the following syntax:
'example=[]'
For more details about this behavior, see [this section](https://www.terraform.io/docs/configuration/attr-as-blocks.html#defining-a-fixed-object-collection-value).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#secondary_ip_range ComputeSubnetwork#secondary_ip_range}

---

##### `stack_type`<sup>Optional</sup> <a name="stack_type" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

The stack type for this subnet to identify whether the IPv6 feature is enabled or not.

If not specified IPV4_ONLY will be used. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#stack_type ComputeSubnetwork#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.timeouts"></a>

```python
timeouts: ComputeSubnetworkTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#timeouts ComputeSubnetwork#timeouts}

---

### ComputeSubnetworkLogConfig <a name="ComputeSubnetworkLogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_subnetwork

computeSubnetwork.ComputeSubnetworkLogConfig(
  aggregation_interval: str = None,
  filter_expr: str = None,
  flow_sampling: typing.Union[int, float] = None,
  metadata: str = None,
  metadata_fields: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.aggregationInterval">aggregation_interval</a></code> | <code>str</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.filterExpr">filter_expr</a></code> | <code>str</code> | Export filter used to define which VPC flow logs should be logged, as as CEL expression. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.flowSampling">flow_sampling</a></code> | <code>typing.Union[int, float]</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadata">metadata</a></code> | <code>str</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadataFields">metadata_fields</a></code> | <code>typing.List[str]</code> | List of metadata fields that should be added to reported logs. |

---

##### `aggregation_interval`<sup>Optional</sup> <a name="aggregation_interval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.aggregationInterval"></a>

```python
aggregation_interval: str
```

- *Type:* str

Can only be specified if VPC flow logging for this subnetwork is enabled.

Toggles the aggregation interval for collecting flow logs. Increasing the
interval time will reduce the amount of generated flow logs for long
lasting connections. Default is an interval of 5 seconds per connection. Default value: "INTERVAL_5_SEC" Possible values: ["INTERVAL_5_SEC", "INTERVAL_30_SEC", "INTERVAL_1_MIN", "INTERVAL_5_MIN", "INTERVAL_10_MIN", "INTERVAL_15_MIN"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#aggregation_interval ComputeSubnetwork#aggregation_interval}

---

##### `filter_expr`<sup>Optional</sup> <a name="filter_expr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.filterExpr"></a>

```python
filter_expr: str
```

- *Type:* str

Export filter used to define which VPC flow logs should be logged, as as CEL expression.

See
https://cloud.google.com/vpc/docs/flow-logs#filtering for details on how to format this field.
The default value is 'true', which evaluates to include everything.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#filter_expr ComputeSubnetwork#filter_expr}

---

##### `flow_sampling`<sup>Optional</sup> <a name="flow_sampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.flowSampling"></a>

```python
flow_sampling: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Can only be specified if VPC flow logging for this subnetwork is enabled.

The value of the field must be in [0, 1]. Set the sampling rate of VPC
flow logs within the subnetwork where 1.0 means all collected logs are
reported and 0.0 means no logs are reported. Default is 0.5 which means
half of all collected logs are reported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#flow_sampling ComputeSubnetwork#flow_sampling}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Can only be specified if VPC flow logging for this subnetwork is enabled.

Configures whether metadata fields should be added to the reported VPC
flow logs. Default value: "INCLUDE_ALL_METADATA" Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA", "CUSTOM_METADATA"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#metadata ComputeSubnetwork#metadata}

---

##### `metadata_fields`<sup>Optional</sup> <a name="metadata_fields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadataFields"></a>

```python
metadata_fields: typing.List[str]
```

- *Type:* typing.List[str]

List of metadata fields that should be added to reported logs.

Can only be specified if VPC flow logs for this subnetwork is enabled and "metadata" is set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#metadata_fields ComputeSubnetwork#metadata_fields}

---

### ComputeSubnetworkSecondaryIpRange <a name="ComputeSubnetworkSecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_subnetwork

computeSubnetwork.ComputeSubnetworkSecondaryIpRange(
  ip_cidr_range: str = None,
  range_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.rangeName">range_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#range_name ComputeSubnetwork#range_name}. |

---

##### `ip_cidr_range`<sup>Optional</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}.

---

##### `range_name`<sup>Optional</sup> <a name="range_name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.rangeName"></a>

```python
range_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#range_name ComputeSubnetwork#range_name}.

---

### ComputeSubnetworkTimeouts <a name="ComputeSubnetworkTimeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_subnetwork

computeSubnetwork.ComputeSubnetworkTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#create ComputeSubnetwork#create}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#delete ComputeSubnetwork#delete}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#update ComputeSubnetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#create ComputeSubnetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#delete ComputeSubnetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#update ComputeSubnetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSubnetworkLogConfigOutputReference <a name="ComputeSubnetworkLogConfigOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_subnetwork

computeSubnetwork.ComputeSubnetworkLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetAggregationInterval">reset_aggregation_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFilterExpr">reset_filter_expr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFlowSampling">reset_flow_sampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadataFields">reset_metadata_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregation_interval` <a name="reset_aggregation_interval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetAggregationInterval"></a>

```python
def reset_aggregation_interval() -> None
```

##### `reset_filter_expr` <a name="reset_filter_expr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFilterExpr"></a>

```python
def reset_filter_expr() -> None
```

##### `reset_flow_sampling` <a name="reset_flow_sampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFlowSampling"></a>

```python
def reset_flow_sampling() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_metadata_fields` <a name="reset_metadata_fields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadataFields"></a>

```python
def reset_metadata_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationIntervalInput">aggregation_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExprInput">filter_expr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSamplingInput">flow_sampling_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFieldsInput">metadata_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationInterval">aggregation_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExpr">filter_expr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSampling">flow_sampling</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFields">metadata_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_interval_input`<sup>Optional</sup> <a name="aggregation_interval_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationIntervalInput"></a>

```python
aggregation_interval_input: str
```

- *Type:* str

---

##### `filter_expr_input`<sup>Optional</sup> <a name="filter_expr_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExprInput"></a>

```python
filter_expr_input: str
```

- *Type:* str

---

##### `flow_sampling_input`<sup>Optional</sup> <a name="flow_sampling_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSamplingInput"></a>

```python
flow_sampling_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_fields_input`<sup>Optional</sup> <a name="metadata_fields_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFieldsInput"></a>

```python
metadata_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `aggregation_interval`<sup>Required</sup> <a name="aggregation_interval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationInterval"></a>

```python
aggregation_interval: str
```

- *Type:* str

---

##### `filter_expr`<sup>Required</sup> <a name="filter_expr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExpr"></a>

```python
filter_expr: str
```

- *Type:* str

---

##### `flow_sampling`<sup>Required</sup> <a name="flow_sampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSampling"></a>

```python
flow_sampling: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `metadata_fields`<sup>Required</sup> <a name="metadata_fields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFields"></a>

```python
metadata_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeSubnetworkLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---


### ComputeSubnetworkSecondaryIpRangeList <a name="ComputeSubnetworkSecondaryIpRangeList" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_subnetwork

computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeSubnetworkSecondaryIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeSubnetworkSecondaryIpRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>]]

---


### ComputeSubnetworkSecondaryIpRangeOutputReference <a name="ComputeSubnetworkSecondaryIpRangeOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_subnetwork

computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetIpCidrRange">reset_ip_cidr_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetRangeName">reset_range_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_cidr_range` <a name="reset_ip_cidr_range" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetIpCidrRange"></a>

```python
def reset_ip_cidr_range() -> None
```

##### `reset_range_name` <a name="reset_range_name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetRangeName"></a>

```python
def reset_range_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRangeInput">ip_cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeNameInput">range_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeName">range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_cidr_range_input`<sup>Optional</sup> <a name="ip_cidr_range_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRangeInput"></a>

```python
ip_cidr_range_input: str
```

- *Type:* str

---

##### `range_name_input`<sup>Optional</sup> <a name="range_name_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeNameInput"></a>

```python
range_name_input: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `range_name`<sup>Required</sup> <a name="range_name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeName"></a>

```python
range_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ComputeSubnetworkSecondaryIpRange, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>, cdktf.IResolvable]

---


### ComputeSubnetworkTimeoutsOutputReference <a name="ComputeSubnetworkTimeoutsOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_subnetwork

computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ComputeSubnetworkTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>, cdktf.IResolvable]

---



