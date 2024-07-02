# `computeGlobalNetworkEndpoint` Submodule <a name="`computeGlobalNetworkEndpoint` Submodule" id="@cdktf/provider-google.computeGlobalNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeGlobalNetworkEndpoint <a name="ComputeGlobalNetworkEndpoint" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint google_compute_global_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint

computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_network_endpoint_group: str,
  port: typing.Union[int, float],
  fqdn: str = None,
  id: str = None,
  ip_address: str = None,
  project: str = None,
  timeouts: ComputeGlobalNetworkEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.globalNetworkEndpointGroup">global_network_endpoint_group</a></code> | <code>str</code> | The global network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number of the external endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.fqdn">fqdn</a></code> | <code>str</code> | Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#id ComputeGlobalNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | IPv4 address external endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#project ComputeGlobalNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_network_endpoint_group`<sup>Required</sup> <a name="global_network_endpoint_group" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.globalNetworkEndpointGroup"></a>

- *Type:* str

The global network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#global_network_endpoint_group ComputeGlobalNetworkEndpoint#global_network_endpoint_group}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port number of the external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#port ComputeGlobalNetworkEndpoint#port}

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.fqdn"></a>

- *Type:* str

Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#fqdn ComputeGlobalNetworkEndpoint#fqdn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#id ComputeGlobalNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.ipAddress"></a>

- *Type:* str

IPv4 address external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#ip_address ComputeGlobalNetworkEndpoint#ip_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#project ComputeGlobalNetworkEndpoint#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#timeouts ComputeGlobalNetworkEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetFqdn">reset_fqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#create ComputeGlobalNetworkEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#delete ComputeGlobalNetworkEndpoint#delete}.

---

##### `reset_fqdn` <a name="reset_fqdn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetFqdn"></a>

```python
def reset_fqdn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeGlobalNetworkEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint

computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint

computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint

computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint

computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeGlobalNetworkEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeGlobalNetworkEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeGlobalNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeGlobalNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference">ComputeGlobalNetworkEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroupInput">global_network_endpoint_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroup">global_network_endpoint_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.timeouts"></a>

```python
timeouts: ComputeGlobalNetworkEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference">ComputeGlobalNetworkEndpointTimeoutsOutputReference</a>

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `global_network_endpoint_group_input`<sup>Optional</sup> <a name="global_network_endpoint_group_input" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroupInput"></a>

```python
global_network_endpoint_group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeGlobalNetworkEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a>]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `global_network_endpoint_group`<sup>Required</sup> <a name="global_network_endpoint_group" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroup"></a>

```python
global_network_endpoint_group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeGlobalNetworkEndpointConfig <a name="ComputeGlobalNetworkEndpointConfig" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint

computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_network_endpoint_group: str,
  port: typing.Union[int, float],
  fqdn: str = None,
  id: str = None,
  ip_address: str = None,
  project: str = None,
  timeouts: ComputeGlobalNetworkEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.globalNetworkEndpointGroup">global_network_endpoint_group</a></code> | <code>str</code> | The global network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port number of the external endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.fqdn">fqdn</a></code> | <code>str</code> | Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#id ComputeGlobalNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | IPv4 address external endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#project ComputeGlobalNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_network_endpoint_group`<sup>Required</sup> <a name="global_network_endpoint_group" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.globalNetworkEndpointGroup"></a>

```python
global_network_endpoint_group: str
```

- *Type:* str

The global network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#global_network_endpoint_group ComputeGlobalNetworkEndpoint#global_network_endpoint_group}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port number of the external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#port ComputeGlobalNetworkEndpoint#port}

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#fqdn ComputeGlobalNetworkEndpoint#fqdn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#id ComputeGlobalNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

IPv4 address external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#ip_address ComputeGlobalNetworkEndpoint#ip_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#project ComputeGlobalNetworkEndpoint#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.timeouts"></a>

```python
timeouts: ComputeGlobalNetworkEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#timeouts ComputeGlobalNetworkEndpoint#timeouts}

---

### ComputeGlobalNetworkEndpointTimeouts <a name="ComputeGlobalNetworkEndpointTimeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint

computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#create ComputeGlobalNetworkEndpoint#create}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#delete ComputeGlobalNetworkEndpoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#create ComputeGlobalNetworkEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/compute_global_network_endpoint#delete ComputeGlobalNetworkEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeGlobalNetworkEndpointTimeoutsOutputReference <a name="ComputeGlobalNetworkEndpointTimeoutsOutputReference" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_network_endpoint

computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeGlobalNetworkEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a>]

---



