# `google_compute_network_endpoint`

Refer to the Terraform Registory for docs: [`google_compute_network_endpoint`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint).

# `computeNetworkEndpoint` Submodule <a name="`computeNetworkEndpoint` Submodule" id="@cdktf/provider-google.computeNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkEndpoint <a name="ComputeNetworkEndpoint" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint google_compute_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint

computeNetworkEndpoint.ComputeNetworkEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_address: str,
  network_endpoint_group: str,
  id: str = None,
  instance: str = None,
  port: typing.Union[int, float] = None,
  project: str = None,
  timeouts: ComputeNetworkEndpointTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | IPv4 address of network endpoint. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.networkEndpointGroup">network_endpoint_group</a></code> | <code>str</code> | The network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#id ComputeNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The name for a specific VM instance that the IP address belongs to. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number of network endpoint. *Note** 'port' is required unless the Network Endpoint Group is created with the type of 'GCE_VM_IP'. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#project ComputeNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone where the containing network endpoint group is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.ipAddress"></a>

- *Type:* str

IPv4 address of network endpoint.

The IP address must belong
to a VM in GCE (either the primary IP or as part of an aliased IP
range).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#ip_address ComputeNetworkEndpoint#ip_address}

---

##### `network_endpoint_group`<sup>Required</sup> <a name="network_endpoint_group" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.networkEndpointGroup"></a>

- *Type:* str

The network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#network_endpoint_group ComputeNetworkEndpoint#network_endpoint_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#id ComputeNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.instance"></a>

- *Type:* str

The name for a specific VM instance that the IP address belongs to.

This is required for network endpoints of type GCE_VM_IP_PORT.
The instance must be in the same zone of network endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#instance ComputeNetworkEndpoint#instance}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number of network endpoint. *Note** 'port' is required unless the Network Endpoint Group is created with the type of 'GCE_VM_IP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#port ComputeNetworkEndpoint#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#project ComputeNetworkEndpoint#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#timeouts ComputeNetworkEndpoint#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.Initializer.parameter.zone"></a>

- *Type:* str

Zone where the containing network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#zone ComputeNetworkEndpoint#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetInstance">reset_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#create ComputeNetworkEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#delete ComputeNetworkEndpoint#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance` <a name="reset_instance" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetInstance"></a>

```python
def reset_instance() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint

computeNetworkEndpoint.ComputeNetworkEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint

computeNetworkEndpoint.ComputeNetworkEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint

computeNetworkEndpoint.ComputeNetworkEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference">ComputeNetworkEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.networkEndpointGroupInput">network_endpoint_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.networkEndpointGroup">network_endpoint_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.timeouts"></a>

```python
timeouts: ComputeNetworkEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference">ComputeNetworkEndpointTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `network_endpoint_group_input`<sup>Optional</sup> <a name="network_endpoint_group_input" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.networkEndpointGroupInput"></a>

```python
network_endpoint_group_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeNetworkEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `network_endpoint_group`<sup>Required</sup> <a name="network_endpoint_group" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.networkEndpointGroup"></a>

```python
network_endpoint_group: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkEndpointConfig <a name="ComputeNetworkEndpointConfig" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint

computeNetworkEndpoint.ComputeNetworkEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_address: str,
  network_endpoint_group: str,
  id: str = None,
  instance: str = None,
  port: typing.Union[int, float] = None,
  project: str = None,
  timeouts: ComputeNetworkEndpointTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | IPv4 address of network endpoint. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.networkEndpointGroup">network_endpoint_group</a></code> | <code>str</code> | The network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#id ComputeNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.instance">instance</a></code> | <code>str</code> | The name for a specific VM instance that the IP address belongs to. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number of network endpoint. *Note** 'port' is required unless the Network Endpoint Group is created with the type of 'GCE_VM_IP'. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#project ComputeNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.zone">zone</a></code> | <code>str</code> | Zone where the containing network endpoint group is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

IPv4 address of network endpoint.

The IP address must belong
to a VM in GCE (either the primary IP or as part of an aliased IP
range).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#ip_address ComputeNetworkEndpoint#ip_address}

---

##### `network_endpoint_group`<sup>Required</sup> <a name="network_endpoint_group" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.networkEndpointGroup"></a>

```python
network_endpoint_group: str
```

- *Type:* str

The network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#network_endpoint_group ComputeNetworkEndpoint#network_endpoint_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#id ComputeNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The name for a specific VM instance that the IP address belongs to.

This is required for network endpoints of type GCE_VM_IP_PORT.
The instance must be in the same zone of network endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#instance ComputeNetworkEndpoint#instance}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number of network endpoint. *Note** 'port' is required unless the Network Endpoint Group is created with the type of 'GCE_VM_IP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#port ComputeNetworkEndpoint#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#project ComputeNetworkEndpoint#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.timeouts"></a>

```python
timeouts: ComputeNetworkEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#timeouts ComputeNetworkEndpoint#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone where the containing network endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#zone ComputeNetworkEndpoint#zone}

---

### ComputeNetworkEndpointTimeouts <a name="ComputeNetworkEndpointTimeouts" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint

computeNetworkEndpoint.ComputeNetworkEndpointTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#create ComputeNetworkEndpoint#create}. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#delete ComputeNetworkEndpoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#create ComputeNetworkEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/compute_network_endpoint#delete ComputeNetworkEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkEndpointTimeoutsOutputReference <a name="ComputeNetworkEndpointTimeoutsOutputReference" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_network_endpoint

computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeNetworkEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNetworkEndpoint.ComputeNetworkEndpointTimeouts">ComputeNetworkEndpointTimeouts</a>]

---



