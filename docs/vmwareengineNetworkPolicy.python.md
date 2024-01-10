# `vmwareengineNetworkPolicy` Submodule <a name="`vmwareengineNetworkPolicy` Submodule" id="@cdktf/provider-google.vmwareengineNetworkPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineNetworkPolicy <a name="VmwareengineNetworkPolicy" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy google_vmwareengine_network_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_policy

vmwareengineNetworkPolicy.VmwareengineNetworkPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  edge_services_cidr: str,
  location: str,
  name: str,
  vmware_engine_network: str,
  description: str = None,
  external_ip: VmwareengineNetworkPolicyExternalIp = None,
  id: str = None,
  internet_access: VmwareengineNetworkPolicyInternetAccess = None,
  project: str = None,
  timeouts: VmwareengineNetworkPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.edgeServicesCidr">edge_services_cidr</a></code> | <code>str</code> | IP address range in CIDR notation used to create internet access and external IP access. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The resource name of the location (region) to create the new network policy in. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the Network Policy. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.vmwareEngineNetwork">vmware_engine_network</a></code> | <code>str</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description for this network policy. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.externalIp">external_ip</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a></code> | external_ip block. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#id VmwareengineNetworkPolicy#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.internetAccess">internet_access</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a></code> | internet_access block. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#project VmwareengineNetworkPolicy#project}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `edge_services_cidr`<sup>Required</sup> <a name="edge_services_cidr" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.edgeServicesCidr"></a>

- *Type:* str

IP address range in CIDR notation used to create internet access and external IP access.

An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any
prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#edge_services_cidr VmwareengineNetworkPolicy#edge_services_cidr}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.location"></a>

- *Type:* str

The resource name of the location (region) to create the new network policy in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#location VmwareengineNetworkPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.name"></a>

- *Type:* str

The ID of the Network Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#name VmwareengineNetworkPolicy#name}

---

##### `vmware_engine_network`<sup>Required</sup> <a name="vmware_engine_network" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.vmwareEngineNetwork"></a>

- *Type:* str

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#vmware_engine_network VmwareengineNetworkPolicy#vmware_engine_network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.description"></a>

- *Type:* str

User-provided description for this network policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#description VmwareengineNetworkPolicy#description}

---

##### `external_ip`<sup>Optional</sup> <a name="external_ip" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.externalIp"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a>

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#external_ip VmwareengineNetworkPolicy#external_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#id VmwareengineNetworkPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internet_access`<sup>Optional</sup> <a name="internet_access" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.internetAccess"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a>

internet_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#internet_access VmwareengineNetworkPolicy#internet_access}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#project VmwareengineNetworkPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#timeouts VmwareengineNetworkPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putExternalIp">put_external_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putInternetAccess">put_internet_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetExternalIp">reset_external_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetInternetAccess">reset_internet_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_external_ip` <a name="put_external_ip" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putExternalIp"></a>

```python
def put_external_ip(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putExternalIp.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the service is enabled; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#enabled VmwareengineNetworkPolicy#enabled}

---

##### `put_internet_access` <a name="put_internet_access" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putInternetAccess"></a>

```python
def put_internet_access(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putInternetAccess.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the service is enabled; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#enabled VmwareengineNetworkPolicy#enabled}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#create VmwareengineNetworkPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#delete VmwareengineNetworkPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#update VmwareengineNetworkPolicy#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external_ip` <a name="reset_external_ip" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetExternalIp"></a>

```python
def reset_external_ip() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_internet_access` <a name="reset_internet_access" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetInternetAccess"></a>

```python
def reset_internet_access() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_policy

vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_policy

vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_policy

vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_policy

vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VmwareengineNetworkPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VmwareengineNetworkPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VmwareengineNetworkPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.externalIp">external_ip</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference">VmwareengineNetworkPolicyExternalIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.internetAccess">internet_access</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference">VmwareengineNetworkPolicyInternetAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference">VmwareengineNetworkPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical">vmware_engine_network_canonical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.edgeServicesCidrInput">edge_services_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.externalIpInput">external_ip_input</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.internetAccessInput">internet_access_input</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetworkInput">vmware_engine_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.edgeServicesCidr">edge_services_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetwork">vmware_engine_network</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `external_ip`<sup>Required</sup> <a name="external_ip" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.externalIp"></a>

```python
external_ip: VmwareengineNetworkPolicyExternalIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference">VmwareengineNetworkPolicyExternalIpOutputReference</a>

---

##### `internet_access`<sup>Required</sup> <a name="internet_access" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.internetAccess"></a>

```python
internet_access: VmwareengineNetworkPolicyInternetAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference">VmwareengineNetworkPolicyInternetAccessOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.timeouts"></a>

```python
timeouts: VmwareengineNetworkPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference">VmwareengineNetworkPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `vmware_engine_network_canonical`<sup>Required</sup> <a name="vmware_engine_network_canonical" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical"></a>

```python
vmware_engine_network_canonical: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `edge_services_cidr_input`<sup>Optional</sup> <a name="edge_services_cidr_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.edgeServicesCidrInput"></a>

```python
edge_services_cidr_input: str
```

- *Type:* str

---

##### `external_ip_input`<sup>Optional</sup> <a name="external_ip_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.externalIpInput"></a>

```python
external_ip_input: VmwareengineNetworkPolicyExternalIp
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internet_access_input`<sup>Optional</sup> <a name="internet_access_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.internetAccessInput"></a>

```python
internet_access_input: VmwareengineNetworkPolicyInternetAccess
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VmwareengineNetworkPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a>]

---

##### `vmware_engine_network_input`<sup>Optional</sup> <a name="vmware_engine_network_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetworkInput"></a>

```python
vmware_engine_network_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `edge_services_cidr`<sup>Required</sup> <a name="edge_services_cidr" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.edgeServicesCidr"></a>

```python
edge_services_cidr: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `vmware_engine_network`<sup>Required</sup> <a name="vmware_engine_network" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetwork"></a>

```python
vmware_engine_network: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineNetworkPolicyConfig <a name="VmwareengineNetworkPolicyConfig" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_policy

vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  edge_services_cidr: str,
  location: str,
  name: str,
  vmware_engine_network: str,
  description: str = None,
  external_ip: VmwareengineNetworkPolicyExternalIp = None,
  id: str = None,
  internet_access: VmwareengineNetworkPolicyInternetAccess = None,
  project: str = None,
  timeouts: VmwareengineNetworkPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.edgeServicesCidr">edge_services_cidr</a></code> | <code>str</code> | IP address range in CIDR notation used to create internet access and external IP access. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.location">location</a></code> | <code>str</code> | The resource name of the location (region) to create the new network policy in. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.name">name</a></code> | <code>str</code> | The ID of the Network Policy. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.vmwareEngineNetwork">vmware_engine_network</a></code> | <code>str</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.description">description</a></code> | <code>str</code> | User-provided description for this network policy. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.externalIp">external_ip</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a></code> | external_ip block. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#id VmwareengineNetworkPolicy#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.internetAccess">internet_access</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a></code> | internet_access block. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#project VmwareengineNetworkPolicy#project}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `edge_services_cidr`<sup>Required</sup> <a name="edge_services_cidr" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.edgeServicesCidr"></a>

```python
edge_services_cidr: str
```

- *Type:* str

IP address range in CIDR notation used to create internet access and external IP access.

An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any
prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#edge_services_cidr VmwareengineNetworkPolicy#edge_services_cidr}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The resource name of the location (region) to create the new network policy in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#location VmwareengineNetworkPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the Network Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#name VmwareengineNetworkPolicy#name}

---

##### `vmware_engine_network`<sup>Required</sup> <a name="vmware_engine_network" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.vmwareEngineNetwork"></a>

```python
vmware_engine_network: str
```

- *Type:* str

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#vmware_engine_network VmwareengineNetworkPolicy#vmware_engine_network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description for this network policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#description VmwareengineNetworkPolicy#description}

---

##### `external_ip`<sup>Optional</sup> <a name="external_ip" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.externalIp"></a>

```python
external_ip: VmwareengineNetworkPolicyExternalIp
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a>

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#external_ip VmwareengineNetworkPolicy#external_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#id VmwareengineNetworkPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internet_access`<sup>Optional</sup> <a name="internet_access" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.internetAccess"></a>

```python
internet_access: VmwareengineNetworkPolicyInternetAccess
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a>

internet_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#internet_access VmwareengineNetworkPolicy#internet_access}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#project VmwareengineNetworkPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.timeouts"></a>

```python
timeouts: VmwareengineNetworkPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#timeouts VmwareengineNetworkPolicy#timeouts}

---

### VmwareengineNetworkPolicyExternalIp <a name="VmwareengineNetworkPolicyExternalIp" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_policy

vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if the service is enabled; false otherwise. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the service is enabled; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#enabled VmwareengineNetworkPolicy#enabled}

---

### VmwareengineNetworkPolicyInternetAccess <a name="VmwareengineNetworkPolicyInternetAccess" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_policy

vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | True if the service is enabled; false otherwise. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

True if the service is enabled; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#enabled VmwareengineNetworkPolicy#enabled}

---

### VmwareengineNetworkPolicyTimeouts <a name="VmwareengineNetworkPolicyTimeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_policy

vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#create VmwareengineNetworkPolicy#create}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#delete VmwareengineNetworkPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#update VmwareengineNetworkPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#create VmwareengineNetworkPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#delete VmwareengineNetworkPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_network_policy#update VmwareengineNetworkPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineNetworkPolicyExternalIpOutputReference <a name="VmwareengineNetworkPolicyExternalIpOutputReference" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_policy

vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue"></a>

```python
internal_value: VmwareengineNetworkPolicyExternalIp
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a>

---


### VmwareengineNetworkPolicyInternetAccessOutputReference <a name="VmwareengineNetworkPolicyInternetAccessOutputReference" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_policy

vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue"></a>

```python
internal_value: VmwareengineNetworkPolicyInternetAccess
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a>

---


### VmwareengineNetworkPolicyTimeoutsOutputReference <a name="VmwareengineNetworkPolicyTimeoutsOutputReference" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_network_policy

vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VmwareengineNetworkPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a>]

---



