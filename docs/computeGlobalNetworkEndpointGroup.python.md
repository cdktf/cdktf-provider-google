# `computeGlobalNetworkEndpointGroup` Submodule <a name="`computeGlobalNetworkEndpointGroup` Submodule" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeGlobalNetworkEndpointGroup <a name="ComputeGlobalNetworkEndpointGroup" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group google_compute_global_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint_group

computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup(
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
  network_endpoint_type: str,
  default_port: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: ComputeGlobalNetworkEndpointGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | Type of network endpoints in this network endpoint group. Possible values: ["INTERNET_IP_PORT", "INTERNET_FQDN_PORT"]. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.defaultPort">default_port</a></code> | <code>typing.Union[int, float]</code> | The default port used if the port number is not specified in the network endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#id ComputeGlobalNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#project ComputeGlobalNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#name ComputeGlobalNetworkEndpointGroup#name}

---

##### `network_endpoint_type`<sup>Required</sup> <a name="network_endpoint_type" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.networkEndpointType"></a>

- *Type:* str

Type of network endpoints in this network endpoint group. Possible values: ["INTERNET_IP_PORT", "INTERNET_FQDN_PORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#network_endpoint_type ComputeGlobalNetworkEndpointGroup#network_endpoint_type}

---

##### `default_port`<sup>Optional</sup> <a name="default_port" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.defaultPort"></a>

- *Type:* typing.Union[int, float]

The default port used if the port number is not specified in the network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#default_port ComputeGlobalNetworkEndpointGroup#default_port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#description ComputeGlobalNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#id ComputeGlobalNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#project ComputeGlobalNetworkEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#timeouts ComputeGlobalNetworkEndpointGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetDefaultPort">reset_default_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#create ComputeGlobalNetworkEndpointGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#delete ComputeGlobalNetworkEndpointGroup#delete}.

---

##### `reset_default_port` <a name="reset_default_port" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetDefaultPort"></a>

```python
def reset_default_port() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeGlobalNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint_group

computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint_group

computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint_group

computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint_group

computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeGlobalNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeGlobalNetworkEndpointGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeGlobalNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeGlobalNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference">ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.defaultPortInput">default_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.networkEndpointTypeInput">network_endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.defaultPort">default_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.timeouts"></a>

```python
timeouts: ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference">ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference</a>

---

##### `default_port_input`<sup>Optional</sup> <a name="default_port_input" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.defaultPortInput"></a>

```python
default_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_endpoint_type_input`<sup>Optional</sup> <a name="network_endpoint_type_input" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.networkEndpointTypeInput"></a>

```python
network_endpoint_type_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeGlobalNetworkEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a>]

---

##### `default_port`<sup>Required</sup> <a name="default_port" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.defaultPort"></a>

```python
default_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_endpoint_type`<sup>Required</sup> <a name="network_endpoint_type" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeGlobalNetworkEndpointGroupConfig <a name="ComputeGlobalNetworkEndpointGroupConfig" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint_group

computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  network_endpoint_type: str,
  default_port: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: ComputeGlobalNetworkEndpointGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | Type of network endpoints in this network endpoint group. Possible values: ["INTERNET_IP_PORT", "INTERNET_FQDN_PORT"]. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.defaultPort">default_port</a></code> | <code>typing.Union[int, float]</code> | The default port used if the port number is not specified in the network endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#id ComputeGlobalNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#project ComputeGlobalNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#name ComputeGlobalNetworkEndpointGroup#name}

---

##### `network_endpoint_type`<sup>Required</sup> <a name="network_endpoint_type" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

Type of network endpoints in this network endpoint group. Possible values: ["INTERNET_IP_PORT", "INTERNET_FQDN_PORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#network_endpoint_type ComputeGlobalNetworkEndpointGroup#network_endpoint_type}

---

##### `default_port`<sup>Optional</sup> <a name="default_port" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.defaultPort"></a>

```python
default_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default port used if the port number is not specified in the network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#default_port ComputeGlobalNetworkEndpointGroup#default_port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#description ComputeGlobalNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#id ComputeGlobalNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#project ComputeGlobalNetworkEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.timeouts"></a>

```python
timeouts: ComputeGlobalNetworkEndpointGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#timeouts ComputeGlobalNetworkEndpointGroup#timeouts}

---

### ComputeGlobalNetworkEndpointGroupTimeouts <a name="ComputeGlobalNetworkEndpointGroupTimeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint_group

computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#create ComputeGlobalNetworkEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#delete ComputeGlobalNetworkEndpointGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#create ComputeGlobalNetworkEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_network_endpoint_group#delete ComputeGlobalNetworkEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference <a name="ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint_group

computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeGlobalNetworkEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a>]

---



