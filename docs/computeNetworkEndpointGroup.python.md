# `computeNetworkEndpointGroup` Submodule <a name="`computeNetworkEndpointGroup` Submodule" id="@cdktf/provider-google.computeNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkEndpointGroup <a name="ComputeNetworkEndpointGroup" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group google_compute_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint_group

computeNetworkEndpointGroup.ComputeNetworkEndpointGroup(
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
  default_port: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  network_endpoint_type: str = None,
  project: str = None,
  subnetwork: str = None,
  timeouts: ComputeNetworkEndpointGroupTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.network">network</a></code> | <code>str</code> | The network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.defaultPort">default_port</a></code> | <code>typing.Union[int, float]</code> | The default port used if the port number is not specified in the network endpoint. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#id ComputeNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#project ComputeNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>str</code> | Optional subnetwork to which all network endpoints in the NEG belong. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone where the network endpoint group is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#name ComputeNetworkEndpointGroup#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.network"></a>

- *Type:* str

The network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#network ComputeNetworkEndpointGroup#network}

---

##### `default_port`<sup>Optional</sup> <a name="default_port" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.defaultPort"></a>

- *Type:* typing.Union[int, float]

The default port used if the port number is not specified in the network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#default_port ComputeNetworkEndpointGroup#default_port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#description ComputeNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#id ComputeNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_endpoint_type`<sup>Optional</sup> <a name="network_endpoint_type" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.networkEndpointType"></a>

- *Type:* str

Type of network endpoints in this network endpoint group.

NON_GCP_PRIVATE_IP_PORT is used for hybrid connectivity network
endpoint groups (see https://cloud.google.com/load-balancing/docs/hybrid).
Note that NON_GCP_PRIVATE_IP_PORT can only be used with Backend Services
that 1) have the following load balancing schemes: EXTERNAL, EXTERNAL_MANAGED,
INTERNAL_MANAGED, and INTERNAL_SELF_MANAGED and 2) support the RATE or
CONNECTION balancing modes.

Possible values include: GCE_VM_IP, GCE_VM_IP_PORT, NON_GCP_PRIVATE_IP_PORT, INTERNET_IP_PORT, INTERNET_FQDN_PORT, SERVERLESS, and PRIVATE_SERVICE_CONNECT. Default value: "GCE_VM_IP_PORT" Possible values: ["GCE_VM_IP", "GCE_VM_IP_PORT", "NON_GCP_PRIVATE_IP_PORT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "SERVERLESS", "PRIVATE_SERVICE_CONNECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#network_endpoint_type ComputeNetworkEndpointGroup#network_endpoint_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#project ComputeNetworkEndpointGroup#project}.

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.subnetwork"></a>

- *Type:* str

Optional subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#subnetwork ComputeNetworkEndpointGroup#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#timeouts ComputeNetworkEndpointGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.Initializer.parameter.zone"></a>

- *Type:* str

Zone where the network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#zone ComputeNetworkEndpointGroup#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDefaultPort">reset_default_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetNetworkEndpointType">reset_network_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#create ComputeNetworkEndpointGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#delete ComputeNetworkEndpointGroup#delete}.

---

##### `reset_default_port` <a name="reset_default_port" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDefaultPort"></a>

```python
def reset_default_port() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_endpoint_type` <a name="reset_network_endpoint_type" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetNetworkEndpointType"></a>

```python
def reset_network_endpoint_type() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint_group

computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint_group

computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint_group

computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint_group

computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeNetworkEndpointGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference">ComputeNetworkEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.defaultPortInput">default_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkEndpointTypeInput">network_endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.defaultPort">default_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.timeouts"></a>

```python
timeouts: ComputeNetworkEndpointGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference">ComputeNetworkEndpointGroupTimeoutsOutputReference</a>

---

##### `default_port_input`<sup>Optional</sup> <a name="default_port_input" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.defaultPortInput"></a>

```python
default_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_endpoint_type_input`<sup>Optional</sup> <a name="network_endpoint_type_input" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkEndpointTypeInput"></a>

```python
network_endpoint_type_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeNetworkEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `default_port`<sup>Required</sup> <a name="default_port" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.defaultPort"></a>

```python
default_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_endpoint_type`<sup>Required</sup> <a name="network_endpoint_type" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkEndpointGroupConfig <a name="ComputeNetworkEndpointGroupConfig" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint_group

computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network: str,
  default_port: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  network_endpoint_type: str = None,
  project: str = None,
  subnetwork: str = None,
  timeouts: ComputeNetworkEndpointGroupTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.network">network</a></code> | <code>str</code> | The network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.defaultPort">default_port</a></code> | <code>typing.Union[int, float]</code> | The default port used if the port number is not specified in the network endpoint. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#id ComputeNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | Type of network endpoints in this network endpoint group. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#project ComputeNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | Optional subnetwork to which all network endpoints in the NEG belong. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.zone">zone</a></code> | <code>str</code> | Zone where the network endpoint group is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#name ComputeNetworkEndpointGroup#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The network to which all network endpoints in the NEG belong. Uses "default" project network if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#network ComputeNetworkEndpointGroup#network}

---

##### `default_port`<sup>Optional</sup> <a name="default_port" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.defaultPort"></a>

```python
default_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default port used if the port number is not specified in the network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#default_port ComputeNetworkEndpointGroup#default_port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#description ComputeNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#id ComputeNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_endpoint_type`<sup>Optional</sup> <a name="network_endpoint_type" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

Type of network endpoints in this network endpoint group.

NON_GCP_PRIVATE_IP_PORT is used for hybrid connectivity network
endpoint groups (see https://cloud.google.com/load-balancing/docs/hybrid).
Note that NON_GCP_PRIVATE_IP_PORT can only be used with Backend Services
that 1) have the following load balancing schemes: EXTERNAL, EXTERNAL_MANAGED,
INTERNAL_MANAGED, and INTERNAL_SELF_MANAGED and 2) support the RATE or
CONNECTION balancing modes.

Possible values include: GCE_VM_IP, GCE_VM_IP_PORT, NON_GCP_PRIVATE_IP_PORT, INTERNET_IP_PORT, INTERNET_FQDN_PORT, SERVERLESS, and PRIVATE_SERVICE_CONNECT. Default value: "GCE_VM_IP_PORT" Possible values: ["GCE_VM_IP", "GCE_VM_IP_PORT", "NON_GCP_PRIVATE_IP_PORT", "INTERNET_IP_PORT", "INTERNET_FQDN_PORT", "SERVERLESS", "PRIVATE_SERVICE_CONNECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#network_endpoint_type ComputeNetworkEndpointGroup#network_endpoint_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#project ComputeNetworkEndpointGroup#project}.

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

Optional subnetwork to which all network endpoints in the NEG belong.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#subnetwork ComputeNetworkEndpointGroup#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.timeouts"></a>

```python
timeouts: ComputeNetworkEndpointGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#timeouts ComputeNetworkEndpointGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone where the network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#zone ComputeNetworkEndpointGroup#zone}

---

### ComputeNetworkEndpointGroupTimeouts <a name="ComputeNetworkEndpointGroupTimeouts" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint_group

computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#create ComputeNetworkEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#delete ComputeNetworkEndpointGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#create ComputeNetworkEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_network_endpoint_group#delete ComputeNetworkEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkEndpointGroupTimeoutsOutputReference <a name="ComputeNetworkEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint_group

computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeNetworkEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkEndpointGroup.ComputeNetworkEndpointGroupTimeouts">ComputeNetworkEndpointGroupTimeouts</a>]

---



