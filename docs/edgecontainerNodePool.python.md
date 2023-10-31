# `google_edgecontainer_node_pool`

Refer to the Terraform Registory for docs: [`google_edgecontainer_node_pool`](https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool).

# `edgecontainerNodePool` Submodule <a name="`edgecontainerNodePool` Submodule" id="@cdktf/provider-google.edgecontainerNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EdgecontainerNodePool <a name="EdgecontainerNodePool" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool google_edgecontainer_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_node_pool

edgecontainerNodePool.EdgecontainerNodePool(
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
  node_count: typing.Union[int, float],
  node_location: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  local_disk_encryption: EdgecontainerNodePoolLocalDiskEncryption = None,
  machine_filter: str = None,
  node_config: EdgecontainerNodePoolNodeConfig = None,
  project: str = None,
  timeouts: EdgecontainerNodePoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The name of the target Distributed Cloud Edge Cluster. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the node pool. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes in the pool. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.nodeLocation">node_location</a></code> | <code>str</code> | Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#id EdgecontainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.localDiskEncryption">local_disk_encryption</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a></code> | local_disk_encryption block. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.machineFilter">machine_filter</a></code> | <code>str</code> | Only machines matching this filter will be allowed to join the node pool. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#project EdgecontainerNodePool#project}. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts">EdgecontainerNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.cluster"></a>

- *Type:* str

The name of the target Distributed Cloud Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#cluster EdgecontainerNodePool#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#location EdgecontainerNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#name EdgecontainerNodePool#name}

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#node_count EdgecontainerNodePool#node_count}

---

##### `node_location`<sup>Required</sup> <a name="node_location" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.nodeLocation"></a>

- *Type:* str

Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#node_location EdgecontainerNodePool#node_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#id EdgecontainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#labels EdgecontainerNodePool#labels}

---

##### `local_disk_encryption`<sup>Optional</sup> <a name="local_disk_encryption" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.localDiskEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a>

local_disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#local_disk_encryption EdgecontainerNodePool#local_disk_encryption}

---

##### `machine_filter`<sup>Optional</sup> <a name="machine_filter" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.machineFilter"></a>

- *Type:* str

Only machines matching this filter will be allowed to join the node pool.

The filtering language accepts strings like "name=<name>", and is
documented in more detail in [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#machine_filter EdgecontainerNodePool#machine_filter}

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.nodeConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#node_config EdgecontainerNodePool#node_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#project EdgecontainerNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts">EdgecontainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#timeouts EdgecontainerNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putLocalDiskEncryption">put_local_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putNodeConfig">put_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetLocalDiskEncryption">reset_local_disk_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetMachineFilter">reset_machine_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetNodeConfig">reset_node_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_local_disk_encryption` <a name="put_local_disk_encryption" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putLocalDiskEncryption"></a>

```python
def put_local_disk_encryption(
  kms_key: str = None
) -> None
```

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putLocalDiskEncryption.parameter.kmsKey"></a>

- *Type:* str

The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting node local disks. If not specified, a Google-managed key will be used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#kms_key EdgecontainerNodePool#kms_key}

---

##### `put_node_config` <a name="put_node_config" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putNodeConfig"></a>

```python
def put_node_config(
  labels: typing.Mapping[str] = None
) -> None
```

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putNodeConfig.parameter.labels"></a>

- *Type:* typing.Mapping[str]

"The Kubernetes node labels".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#labels EdgecontainerNodePool#labels}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#create EdgecontainerNodePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#delete EdgecontainerNodePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#update EdgecontainerNodePool#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_local_disk_encryption` <a name="reset_local_disk_encryption" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetLocalDiskEncryption"></a>

```python
def reset_local_disk_encryption() -> None
```

##### `reset_machine_filter` <a name="reset_machine_filter" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetMachineFilter"></a>

```python
def reset_machine_filter() -> None
```

##### `reset_node_config` <a name="reset_node_config" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetNodeConfig"></a>

```python
def reset_node_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EdgecontainerNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_node_pool

edgecontainerNodePool.EdgecontainerNodePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_node_pool

edgecontainerNodePool.EdgecontainerNodePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_node_pool

edgecontainerNodePool.EdgecontainerNodePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_node_pool

edgecontainerNodePool.EdgecontainerNodePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EdgecontainerNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EdgecontainerNodePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EdgecontainerNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EdgecontainerNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.localDiskEncryption">local_disk_encryption</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference">EdgecontainerNodePoolLocalDiskEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference">EdgecontainerNodePoolNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeVersion">node_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference">EdgecontainerNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.localDiskEncryptionInput">local_disk_encryption_input</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.machineFilterInput">machine_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeConfigInput">node_config_input</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeLocationInput">node_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts">EdgecontainerNodePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.machineFilter">machine_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeLocation">node_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `local_disk_encryption`<sup>Required</sup> <a name="local_disk_encryption" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.localDiskEncryption"></a>

```python
local_disk_encryption: EdgecontainerNodePoolLocalDiskEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference">EdgecontainerNodePoolLocalDiskEncryptionOutputReference</a>

---

##### `node_config`<sup>Required</sup> <a name="node_config" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeConfig"></a>

```python
node_config: EdgecontainerNodePoolNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference">EdgecontainerNodePoolNodeConfigOutputReference</a>

---

##### `node_version`<sup>Required</sup> <a name="node_version" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeVersion"></a>

```python
node_version: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.timeouts"></a>

```python
timeouts: EdgecontainerNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference">EdgecontainerNodePoolTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `local_disk_encryption_input`<sup>Optional</sup> <a name="local_disk_encryption_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.localDiskEncryptionInput"></a>

```python
local_disk_encryption_input: EdgecontainerNodePoolLocalDiskEncryption
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `machine_filter_input`<sup>Optional</sup> <a name="machine_filter_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.machineFilterInput"></a>

```python
machine_filter_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_config_input`<sup>Optional</sup> <a name="node_config_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeConfigInput"></a>

```python
node_config_input: EdgecontainerNodePoolNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a>

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_location_input`<sup>Optional</sup> <a name="node_location_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeLocationInput"></a>

```python
node_location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EdgecontainerNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts">EdgecontainerNodePoolTimeouts</a>]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `machine_filter`<sup>Required</sup> <a name="machine_filter" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.machineFilter"></a>

```python
machine_filter: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_location`<sup>Required</sup> <a name="node_location" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.nodeLocation"></a>

```python
node_location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EdgecontainerNodePoolConfig <a name="EdgecontainerNodePoolConfig" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_node_pool

edgecontainerNodePool.EdgecontainerNodePoolConfig(
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
  node_count: typing.Union[int, float],
  node_location: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  local_disk_encryption: EdgecontainerNodePoolLocalDiskEncryption = None,
  machine_filter: str = None,
  node_config: EdgecontainerNodePoolNodeConfig = None,
  project: str = None,
  timeouts: EdgecontainerNodePoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.cluster">cluster</a></code> | <code>str</code> | The name of the target Distributed Cloud Edge Cluster. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.name">name</a></code> | <code>str</code> | The resource name of the node pool. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes in the pool. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.nodeLocation">node_location</a></code> | <code>str</code> | Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#id EdgecontainerNodePool#id}. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.localDiskEncryption">local_disk_encryption</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a></code> | local_disk_encryption block. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.machineFilter">machine_filter</a></code> | <code>str</code> | Only machines matching this filter will be allowed to join the node pool. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.nodeConfig">node_config</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#project EdgecontainerNodePool#project}. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts">EdgecontainerNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The name of the target Distributed Cloud Edge Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#cluster EdgecontainerNodePool#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#location EdgecontainerNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#name EdgecontainerNodePool#name}

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#node_count EdgecontainerNodePool#node_count}

---

##### `node_location`<sup>Required</sup> <a name="node_location" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.nodeLocation"></a>

```python
node_location: str
```

- *Type:* str

Name of the Google Distributed Cloud Edge zone where this node pool will be created. For example: 'us-central1-edge-customer-a'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#node_location EdgecontainerNodePool#node_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#id EdgecontainerNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#labels EdgecontainerNodePool#labels}

---

##### `local_disk_encryption`<sup>Optional</sup> <a name="local_disk_encryption" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.localDiskEncryption"></a>

```python
local_disk_encryption: EdgecontainerNodePoolLocalDiskEncryption
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a>

local_disk_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#local_disk_encryption EdgecontainerNodePool#local_disk_encryption}

---

##### `machine_filter`<sup>Optional</sup> <a name="machine_filter" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.machineFilter"></a>

```python
machine_filter: str
```

- *Type:* str

Only machines matching this filter will be allowed to join the node pool.

The filtering language accepts strings like "name=<name>", and is
documented in more detail in [AIP-160](https://google.aip.dev/160).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#machine_filter EdgecontainerNodePool#machine_filter}

---

##### `node_config`<sup>Optional</sup> <a name="node_config" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.nodeConfig"></a>

```python
node_config: EdgecontainerNodePoolNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#node_config EdgecontainerNodePool#node_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#project EdgecontainerNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolConfig.property.timeouts"></a>

```python
timeouts: EdgecontainerNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts">EdgecontainerNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#timeouts EdgecontainerNodePool#timeouts}

---

### EdgecontainerNodePoolLocalDiskEncryption <a name="EdgecontainerNodePoolLocalDiskEncryption" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_node_pool

edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption(
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption.property.kmsKey">kms_key</a></code> | <code>str</code> | The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting node local disks. If not specified, a Google-managed key will be used instead. |

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The Cloud KMS CryptoKey e.g. projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey} to use for protecting node local disks. If not specified, a Google-managed key will be used instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#kms_key EdgecontainerNodePool#kms_key}

---

### EdgecontainerNodePoolNodeConfig <a name="EdgecontainerNodePoolNodeConfig" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_node_pool

edgecontainerNodePool.EdgecontainerNodePoolNodeConfig(
  labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | "The Kubernetes node labels". |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

"The Kubernetes node labels".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#labels EdgecontainerNodePool#labels}

---

### EdgecontainerNodePoolTimeouts <a name="EdgecontainerNodePoolTimeouts" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_node_pool

edgecontainerNodePool.EdgecontainerNodePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#create EdgecontainerNodePool#create}. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#delete EdgecontainerNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#update EdgecontainerNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#create EdgecontainerNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#delete EdgecontainerNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/edgecontainer_node_pool#update EdgecontainerNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EdgecontainerNodePoolLocalDiskEncryptionOutputReference <a name="EdgecontainerNodePoolLocalDiskEncryptionOutputReference" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_node_pool

edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyActiveVersion">kms_key_active_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyState">kms_key_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_active_version`<sup>Required</sup> <a name="kms_key_active_version" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyActiveVersion"></a>

```python
kms_key_active_version: str
```

- *Type:* str

---

##### `kms_key_state`<sup>Required</sup> <a name="kms_key_state" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyState"></a>

```python
kms_key_state: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: EdgecontainerNodePoolLocalDiskEncryption
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolLocalDiskEncryption">EdgecontainerNodePoolLocalDiskEncryption</a>

---


### EdgecontainerNodePoolNodeConfigOutputReference <a name="EdgecontainerNodePoolNodeConfigOutputReference" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_node_pool

edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: EdgecontainerNodePoolNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolNodeConfig">EdgecontainerNodePoolNodeConfig</a>

---


### EdgecontainerNodePoolTimeoutsOutputReference <a name="EdgecontainerNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import edgecontainer_node_pool

edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts">EdgecontainerNodePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EdgecontainerNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.edgecontainerNodePool.EdgecontainerNodePoolTimeouts">EdgecontainerNodePoolTimeouts</a>]

---



