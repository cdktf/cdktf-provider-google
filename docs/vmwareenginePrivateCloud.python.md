# `vmwareenginePrivateCloud` Submodule <a name="`vmwareenginePrivateCloud` Submodule" id="@cdktf/provider-google.vmwareenginePrivateCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareenginePrivateCloud <a name="VmwareenginePrivateCloud" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud google_vmwareengine_private_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloud(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  management_cluster: VmwareenginePrivateCloudManagementCluster,
  name: str,
  network_config: VmwareenginePrivateCloudNetworkConfig,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: VmwareenginePrivateCloudTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the PrivateCloud should reside. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.managementCluster">management_cluster</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a></code> | management_cluster block. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the PrivateCloud. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description for this private cloud. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#id VmwareenginePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#project VmwareenginePrivateCloud#project}. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts">VmwareenginePrivateCloudTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.type">type</a></code> | <code>str</code> | Initial type of the private cloud. Default value: "STANDARD" Possible values: ["STANDARD", "TIME_LIMITED"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.location"></a>

- *Type:* str

The location where the PrivateCloud should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#location VmwareenginePrivateCloud#location}

---

##### `management_cluster`<sup>Required</sup> <a name="management_cluster" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.managementCluster"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a>

management_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#management_cluster VmwareenginePrivateCloud#management_cluster}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.name"></a>

- *Type:* str

The ID of the PrivateCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#name VmwareenginePrivateCloud#name}

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#network_config VmwareenginePrivateCloud#network_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.description"></a>

- *Type:* str

User-provided description for this private cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#description VmwareenginePrivateCloud#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#id VmwareenginePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#project VmwareenginePrivateCloud#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts">VmwareenginePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#timeouts VmwareenginePrivateCloud#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.Initializer.parameter.type"></a>

- *Type:* str

Initial type of the private cloud. Default value: "STANDARD" Possible values: ["STANDARD", "TIME_LIMITED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#type VmwareenginePrivateCloud#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putManagementCluster">put_management_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_management_cluster` <a name="put_management_cluster" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putManagementCluster"></a>

```python
def put_management_cluster(
  cluster_id: str,
  node_type_configs: typing.Union[IResolvable, typing.List[VmwareenginePrivateCloudManagementClusterNodeTypeConfigs]] = None
) -> None
```

###### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putManagementCluster.parameter.clusterId"></a>

- *Type:* str

The user-provided identifier of the new Cluster.

The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with RFC 1034 (https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#cluster_id VmwareenginePrivateCloud#cluster_id}

---

###### `node_type_configs`<sup>Optional</sup> <a name="node_type_configs" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putManagementCluster.parameter.nodeTypeConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs">VmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>]]

node_type_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#node_type_configs VmwareenginePrivateCloud#node_type_configs}

---

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putNetworkConfig"></a>

```python
def put_network_config(
  management_cidr: str,
  vmware_engine_network: str = None
) -> None
```

###### `management_cidr`<sup>Required</sup> <a name="management_cidr" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putNetworkConfig.parameter.managementCidr"></a>

- *Type:* str

Management CIDR used by VMware management appliances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#management_cidr VmwareenginePrivateCloud#management_cidr}

---

###### `vmware_engine_network`<sup>Optional</sup> <a name="vmware_engine_network" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putNetworkConfig.parameter.vmwareEngineNetwork"></a>

- *Type:* str

The relative resource name of the VMware Engine network attached to the private cloud.

Specify the name in the following form: projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
where {project} can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#vmware_engine_network VmwareenginePrivateCloud#vmware_engine_network}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#create VmwareenginePrivateCloud#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#delete VmwareenginePrivateCloud#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#update VmwareenginePrivateCloud#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VmwareenginePrivateCloud resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloud.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloud.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloud.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloud.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VmwareenginePrivateCloud resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VmwareenginePrivateCloud to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VmwareenginePrivateCloud that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VmwareenginePrivateCloud to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.hcx">hcx</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList">VmwareenginePrivateCloudHcxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.managementCluster">management_cluster</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference">VmwareenginePrivateCloudManagementClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference">VmwareenginePrivateCloudNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.nsx">nsx</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList">VmwareenginePrivateCloudNsxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference">VmwareenginePrivateCloudTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.vcenter">vcenter</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList">VmwareenginePrivateCloudVcenterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.managementClusterInput">management_cluster_input</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts">VmwareenginePrivateCloudTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hcx`<sup>Required</sup> <a name="hcx" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.hcx"></a>

```python
hcx: VmwareenginePrivateCloudHcxList
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList">VmwareenginePrivateCloudHcxList</a>

---

##### `management_cluster`<sup>Required</sup> <a name="management_cluster" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.managementCluster"></a>

```python
management_cluster: VmwareenginePrivateCloudManagementClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference">VmwareenginePrivateCloudManagementClusterOutputReference</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.networkConfig"></a>

```python
network_config: VmwareenginePrivateCloudNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference">VmwareenginePrivateCloudNetworkConfigOutputReference</a>

---

##### `nsx`<sup>Required</sup> <a name="nsx" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.nsx"></a>

```python
nsx: VmwareenginePrivateCloudNsxList
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList">VmwareenginePrivateCloudNsxList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.timeouts"></a>

```python
timeouts: VmwareenginePrivateCloudTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference">VmwareenginePrivateCloudTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `vcenter`<sup>Required</sup> <a name="vcenter" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.vcenter"></a>

```python
vcenter: VmwareenginePrivateCloudVcenterList
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList">VmwareenginePrivateCloudVcenterList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `management_cluster_input`<sup>Optional</sup> <a name="management_cluster_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.managementClusterInput"></a>

```python
management_cluster_input: VmwareenginePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.networkConfigInput"></a>

```python
network_config_input: VmwareenginePrivateCloudNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VmwareenginePrivateCloudTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts">VmwareenginePrivateCloudTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloud.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareenginePrivateCloudConfig <a name="VmwareenginePrivateCloudConfig" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  management_cluster: VmwareenginePrivateCloudManagementCluster,
  name: str,
  network_config: VmwareenginePrivateCloudNetworkConfig,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: VmwareenginePrivateCloudTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.location">location</a></code> | <code>str</code> | The location where the PrivateCloud should reside. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.managementCluster">management_cluster</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a></code> | management_cluster block. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.name">name</a></code> | <code>str</code> | The ID of the PrivateCloud. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.description">description</a></code> | <code>str</code> | User-provided description for this private cloud. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#id VmwareenginePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#project VmwareenginePrivateCloud#project}. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts">VmwareenginePrivateCloudTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.type">type</a></code> | <code>str</code> | Initial type of the private cloud. Default value: "STANDARD" Possible values: ["STANDARD", "TIME_LIMITED"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the PrivateCloud should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#location VmwareenginePrivateCloud#location}

---

##### `management_cluster`<sup>Required</sup> <a name="management_cluster" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.managementCluster"></a>

```python
management_cluster: VmwareenginePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a>

management_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#management_cluster VmwareenginePrivateCloud#management_cluster}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the PrivateCloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#name VmwareenginePrivateCloud#name}

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.networkConfig"></a>

```python
network_config: VmwareenginePrivateCloudNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#network_config VmwareenginePrivateCloud#network_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description for this private cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#description VmwareenginePrivateCloud#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#id VmwareenginePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#project VmwareenginePrivateCloud#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.timeouts"></a>

```python
timeouts: VmwareenginePrivateCloudTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts">VmwareenginePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#timeouts VmwareenginePrivateCloud#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Initial type of the private cloud. Default value: "STANDARD" Possible values: ["STANDARD", "TIME_LIMITED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#type VmwareenginePrivateCloud#type}

---

### VmwareenginePrivateCloudHcx <a name="VmwareenginePrivateCloudHcx" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcx.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudHcx()
```


### VmwareenginePrivateCloudManagementCluster <a name="VmwareenginePrivateCloudManagementCluster" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster(
  cluster_id: str,
  node_type_configs: typing.Union[IResolvable, typing.List[VmwareenginePrivateCloudManagementClusterNodeTypeConfigs]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster.property.clusterId">cluster_id</a></code> | <code>str</code> | The user-provided identifier of the new Cluster. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster.property.nodeTypeConfigs">node_type_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs">VmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>]]</code> | node_type_configs block. |

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The user-provided identifier of the new Cluster.

The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with RFC 1034 (https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#cluster_id VmwareenginePrivateCloud#cluster_id}

---

##### `node_type_configs`<sup>Optional</sup> <a name="node_type_configs" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster.property.nodeTypeConfigs"></a>

```python
node_type_configs: typing.Union[IResolvable, typing.List[VmwareenginePrivateCloudManagementClusterNodeTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs">VmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>]]

node_type_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#node_type_configs VmwareenginePrivateCloud#node_type_configs}

---

### VmwareenginePrivateCloudManagementClusterNodeTypeConfigs <a name="VmwareenginePrivateCloudManagementClusterNodeTypeConfigs" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs(
  node_count: typing.Union[int, float],
  node_type_id: str,
  custom_core_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes of this type in the cluster. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#node_type_id VmwareenginePrivateCloud#node_type_id}. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.customCoreCount">custom_core_count</a></code> | <code>typing.Union[int, float]</code> | Customized number of cores available to each node of the type. |

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes of this type in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#node_count VmwareenginePrivateCloud#node_count}

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#node_type_id VmwareenginePrivateCloud#node_type_id}.

---

##### `custom_core_count`<sup>Optional</sup> <a name="custom_core_count" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs.property.customCoreCount"></a>

```python
custom_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Customized number of cores available to each node of the type.

This number must always be one of 'nodeType.availableCustomCoreCounts'.
If zero is provided max value from 'nodeType.availableCustomCoreCounts' will be used.
This cannot be changed once the PrivateCloud is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#custom_core_count VmwareenginePrivateCloud#custom_core_count}

---

### VmwareenginePrivateCloudNetworkConfig <a name="VmwareenginePrivateCloudNetworkConfig" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig(
  management_cidr: str,
  vmware_engine_network: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig.property.managementCidr">management_cidr</a></code> | <code>str</code> | Management CIDR used by VMware management appliances. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig.property.vmwareEngineNetwork">vmware_engine_network</a></code> | <code>str</code> | The relative resource name of the VMware Engine network attached to the private cloud. |

---

##### `management_cidr`<sup>Required</sup> <a name="management_cidr" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig.property.managementCidr"></a>

```python
management_cidr: str
```

- *Type:* str

Management CIDR used by VMware management appliances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#management_cidr VmwareenginePrivateCloud#management_cidr}

---

##### `vmware_engine_network`<sup>Optional</sup> <a name="vmware_engine_network" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig.property.vmwareEngineNetwork"></a>

```python
vmware_engine_network: str
```

- *Type:* str

The relative resource name of the VMware Engine network attached to the private cloud.

Specify the name in the following form: projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
where {project} can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#vmware_engine_network VmwareenginePrivateCloud#vmware_engine_network}

---

### VmwareenginePrivateCloudNsx <a name="VmwareenginePrivateCloudNsx" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsx.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudNsx()
```


### VmwareenginePrivateCloudTimeouts <a name="VmwareenginePrivateCloudTimeouts" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#create VmwareenginePrivateCloud#create}. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#delete VmwareenginePrivateCloud#delete}. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#update VmwareenginePrivateCloud#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#create VmwareenginePrivateCloud#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#delete VmwareenginePrivateCloud#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/vmwareengine_private_cloud#update VmwareenginePrivateCloud#update}.

---

### VmwareenginePrivateCloudVcenter <a name="VmwareenginePrivateCloudVcenter" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenter.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenter()
```


## Classes <a name="Classes" id="Classes"></a>

### VmwareenginePrivateCloudHcxList <a name="VmwareenginePrivateCloudHcxList" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VmwareenginePrivateCloudHcxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VmwareenginePrivateCloudHcxOutputReference <a name="VmwareenginePrivateCloudHcxOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.internalIp">internal_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcx">VmwareenginePrivateCloudHcx</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `internal_ip`<sup>Required</sup> <a name="internal_ip" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.internalIp"></a>

```python
internal_ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcxOutputReference.property.internalValue"></a>

```python
internal_value: VmwareenginePrivateCloudHcx
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudHcx">VmwareenginePrivateCloudHcx</a>

---


### VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList <a name="VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs">VmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VmwareenginePrivateCloudManagementClusterNodeTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs">VmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>]]

---


### VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference <a name="VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resetCustomCoreCount">reset_custom_core_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_core_count` <a name="reset_custom_core_count" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.resetCustomCoreCount"></a>

```python
def reset_custom_core_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCountInput">custom_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput">node_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount">custom_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs">VmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_core_count_input`<sup>Optional</sup> <a name="custom_core_count_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCountInput"></a>

```python
custom_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type_id_input`<sup>Optional</sup> <a name="node_type_id_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput"></a>

```python
node_type_id_input: str
```

- *Type:* str

---

##### `custom_core_count`<sup>Required</sup> <a name="custom_core_count" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.customCoreCount"></a>

```python
custom_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VmwareenginePrivateCloudManagementClusterNodeTypeConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs">VmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>]

---


### VmwareenginePrivateCloudManagementClusterOutputReference <a name="VmwareenginePrivateCloudManagementClusterOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.putNodeTypeConfigs">put_node_type_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.resetNodeTypeConfigs">reset_node_type_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_node_type_configs` <a name="put_node_type_configs" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.putNodeTypeConfigs"></a>

```python
def put_node_type_configs(
  value: typing.Union[IResolvable, typing.List[VmwareenginePrivateCloudManagementClusterNodeTypeConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.putNodeTypeConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs">VmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>]]

---

##### `reset_node_type_configs` <a name="reset_node_type_configs" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.resetNodeTypeConfigs"></a>

```python
def reset_node_type_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs">node_type_configs</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigsInput">node_type_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs">VmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_type_configs`<sup>Required</sup> <a name="node_type_configs" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigs"></a>

```python
node_type_configs: VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList">VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `node_type_configs_input`<sup>Optional</sup> <a name="node_type_configs_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.nodeTypeConfigsInput"></a>

```python
node_type_configs_input: typing.Union[IResolvable, typing.List[VmwareenginePrivateCloudManagementClusterNodeTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterNodeTypeConfigs">VmwareenginePrivateCloudManagementClusterNodeTypeConfigs</a>]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementClusterOutputReference.property.internalValue"></a>

```python
internal_value: VmwareenginePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudManagementCluster">VmwareenginePrivateCloudManagementCluster</a>

---


### VmwareenginePrivateCloudNetworkConfigOutputReference <a name="VmwareenginePrivateCloudNetworkConfigOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.resetVmwareEngineNetwork">reset_vmware_engine_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vmware_engine_network` <a name="reset_vmware_engine_network" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.resetVmwareEngineNetwork"></a>

```python
def reset_vmware_engine_network() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.dnsServerIp">dns_server_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion">management_ip_address_layout_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical">vmware_engine_network_canonical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidrInput">management_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkInput">vmware_engine_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr">management_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork">vmware_engine_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_server_ip`<sup>Required</sup> <a name="dns_server_ip" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.dnsServerIp"></a>

```python
dns_server_ip: str
```

- *Type:* str

---

##### `management_ip_address_layout_version`<sup>Required</sup> <a name="management_ip_address_layout_version" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.managementIpAddressLayoutVersion"></a>

```python
management_ip_address_layout_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vmware_engine_network_canonical`<sup>Required</sup> <a name="vmware_engine_network_canonical" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkCanonical"></a>

```python
vmware_engine_network_canonical: str
```

- *Type:* str

---

##### `management_cidr_input`<sup>Optional</sup> <a name="management_cidr_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidrInput"></a>

```python
management_cidr_input: str
```

- *Type:* str

---

##### `vmware_engine_network_input`<sup>Optional</sup> <a name="vmware_engine_network_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetworkInput"></a>

```python
vmware_engine_network_input: str
```

- *Type:* str

---

##### `management_cidr`<sup>Required</sup> <a name="management_cidr" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.managementCidr"></a>

```python
management_cidr: str
```

- *Type:* str

---

##### `vmware_engine_network`<sup>Required</sup> <a name="vmware_engine_network" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.vmwareEngineNetwork"></a>

```python
vmware_engine_network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: VmwareenginePrivateCloudNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNetworkConfig">VmwareenginePrivateCloudNetworkConfig</a>

---


### VmwareenginePrivateCloudNsxList <a name="VmwareenginePrivateCloudNsxList" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VmwareenginePrivateCloudNsxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VmwareenginePrivateCloudNsxOutputReference <a name="VmwareenginePrivateCloudNsxOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.internalIp">internal_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsx">VmwareenginePrivateCloudNsx</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `internal_ip`<sup>Required</sup> <a name="internal_ip" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.internalIp"></a>

```python
internal_ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsxOutputReference.property.internalValue"></a>

```python
internal_value: VmwareenginePrivateCloudNsx
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudNsx">VmwareenginePrivateCloudNsx</a>

---


### VmwareenginePrivateCloudTimeoutsOutputReference <a name="VmwareenginePrivateCloudTimeoutsOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts">VmwareenginePrivateCloudTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VmwareenginePrivateCloudTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudTimeouts">VmwareenginePrivateCloudTimeouts</a>]

---


### VmwareenginePrivateCloudVcenterList <a name="VmwareenginePrivateCloudVcenterList" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VmwareenginePrivateCloudVcenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VmwareenginePrivateCloudVcenterOutputReference <a name="VmwareenginePrivateCloudVcenterOutputReference" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_private_cloud

vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.internalIp">internal_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenter">VmwareenginePrivateCloudVcenter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `internal_ip`<sup>Required</sup> <a name="internal_ip" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.internalIp"></a>

```python
internal_ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenterOutputReference.property.internalValue"></a>

```python
internal_value: VmwareenginePrivateCloudVcenter
```

- *Type:* <a href="#@cdktf/provider-google.vmwareenginePrivateCloud.VmwareenginePrivateCloudVcenter">VmwareenginePrivateCloudVcenter</a>

---



